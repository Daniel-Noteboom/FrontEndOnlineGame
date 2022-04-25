import React, { useRef, useState } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { attackTroops, fortifyTroops, reinforceTroops, setTroops } from '../../actions/gameActions';
import { DESCRIPTIONS, MAX_ATTACK_TROOPS, SET_ATTACK } from './RiskBoardTypes';

function RiskPopUpBox(props) {
  const {countryClicked} = props;
  const {countries} = props;
  const {game} = props;
  const options = [];
  const phase = game && game.minimumTroopsDefeatedCountry === 0 ? game.phase : SET_ATTACK;
  const description = DESCRIPTIONS[phase];
  const changedTroops= useRef(false);
  const getMaxTroops = (game, countryClicked, countries) => {
    if(!game) return 0;
    else if(phase === "SET_ATTACK") return game.board.countryNames[game.currentVictorCountry].troops - 1;
    else if(countryClicked.country === undefined) return 0;
    else if(phase === "DRAFT") {
      return game.currentReinforcementTroopsNumber;
    } else if(phase === "ATTACK" && !game.currentVictorCountry) {
      return Math.min(countries[countryClicked.firstCountry].troops - 1, MAX_ATTACK_TROOPS);
    }  else if (countryClicked.secondCountryClicked) {
      return countries[countryClicked.firstCountry].troops - 1;
    }
  }

  const maxTroops = getMaxTroops(game, countryClicked, countries);
  const [troops, setTroops] = useState(maxTroops);
  if(troops !== maxTroops && !changedTroops.current) {
    setTroops(maxTroops);
  }
  for(let i = maxTroops; i >= Math.max(game.minimumTroopsDefeatedCountry, 1); i--) {
    options.push(<option key={`${description.select}${i}`} value={i}> {description.select}: {i} </option>);
  }

  const onChange = (e) => {
    changedTroops.current = true;
    setTroops(e.target.value);
  }
  const onSubmit = (e) =>  {
    e.preventDefault();
    if(phase === "DRAFT") {
      props.reinforceTroops(game.tag, countryClicked.country, troops);
    } else if(phase === "ATTACK") {
      props.attackTroops(game.tag, countryClicked.firstCountry, countryClicked.country, troops);
    } else if(phase === "SET_ATTACK") {
      props.setTroops(game.tag, troops);
    } else if(phase === "FORTIFY") {
      props.fortifyTroops(game.tag, countryClicked.firstCountry, countryClicked.country, troops);
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit} style={{position: 'absolute', left: countryClicked.x, top: countryClicked.y}}>
      <select onChange={onChange} name={description.name}>
          {options.map(option => option)}
      </select>
      <button type="submit" className="btn btn-primary" style={{display: 'block'}}>{description.description}</button>
      </form>
    </div>
  )
}
RiskPopUpBox.propTypes = {
  reinforceTroops: PropTypes.func.isRequired,
  attackTroops: PropTypes.func.isRequired,
  setTroops: PropTypes.func.isRequired,
  fortifyTroops: PropTypes.func.isRequired
}
export default connect(null, {reinforceTroops, attackTroops, setTroops, fortifyTroops})(RiskPopUpBox)
