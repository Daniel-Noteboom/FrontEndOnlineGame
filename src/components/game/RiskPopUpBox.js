import React, { useState } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { attackTroops, reinforceTroops } from '../../actions/gameActions';
import { DESCRIPTIONS, MAX_ATTACK_TROOPS } from './RiskBoardTypes';

function RiskPopUpBox(props) {
  const {countryClicked} = props.riskGame;
  const {countries} = props;
  const {game} = props.riskGame;
  const options = [];
  const description = DESCRIPTIONS[game.phase];

  const getMaxTroops = (game, countryClicked, countries) => {
    if(countryClicked.country === undefined) return 0;
    else if(game.phase === "DRAFT") {
      return game.currentReinforcementTroopsNumber;
    } else if(game.phase === "ATTACK" && countryClicked.secondCountryClicked) {
      return Math.min(countries[countryClicked.firstCountry].troops - 1, MAX_ATTACK_TROOPS);
    } else if(countryClicked.secondCountryClicked) {
      return countries[countryClicked.firstCountry].troops - 1;
    }
  }

  const maxTroops = getMaxTroops(game, countryClicked, countries);
  const [troops, setTroops] = useState(maxTroops);
  for(let i = maxTroops; i >= 1; i--) {
    options.push(<option key={`${description.select}${i}`} value={i}> {description.select}: {i} </option>);
  }

  const onChange = (e) => {
    setTroops(e.target.value);
  }
  const onSubmit = (e) =>  {
    e.preventDefault();
    if(game.phase === "DRAFT") {
      props.reinforceTroops(game.tag, countryClicked.country, troops);
    } else if(game.phase === "ATTACK") {
      props.attackTroops(game.tag, countryClicked.firstCountry, countryClicked.country, troops);
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
  attackTroops: PropTypes.func.isRequired
}
export default connect(null, {reinforceTroops, attackTroops})(RiskPopUpBox)
