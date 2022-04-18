import React, { useState } from 'react'
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { reinforceTroops } from '../../actions/gameActions';
import { DESCRIPTIONS } from './RiskBoardTypes';

function RiskPopUpBox(props) {
  const {countryClicked} = props.riskGame;
  const {game} = props.riskGame;
  const options = [];
  const [troops, setTroops] = useState(game.currentReinforcementTroopsNumber);
  for(let i = game.currentReinforcementTroopsNumber; i >= 1; i--) {
    options.push(<option key={`reinforce${i}`} value={i}> Reinforce: {i} </option>);
  }

  const onChange = (e) => {
    setTroops(e.target.value);
  }
  const description = DESCRIPTIONS[game.phase];
  const onSubmit = (e) =>  {
    e.preventDefault();
    props.reinforceTroops(game.tag, countryClicked.country, troops);
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
  reinforceTroops: PropTypes.func.isRequired
}
export default connect(null, {reinforceTroops})(RiskPopUpBox)
