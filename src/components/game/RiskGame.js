import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getRiskGame } from '../../actions/gameActions';
import RiskBoard from '../../RiskBoard'
import PropTypes from "prop-types"

function RiskGame(props) {
  const location = useLocation();
  const params = useParams();
  const {tag} = params;
  const navigate = useNavigate();
  if(location.state == null) {
    props.getRiskGame(tag, navigate);
  }
  const [riskGame, setRiskGame] = useState(location.state.riskGame);
  const countries = riskGame.board.countryNames;

  const countries_processed = Object.keys(countries).reduce(
    (a,v) => ({ ...a, [v.toLowerCase().split(" ").join("_")]: countries[v]}), {});
  return (
    <div>
    <RiskBoard countries={countries_processed}> </RiskBoard>
    <h4> Current players</h4>
    </div>
  )
}


RiskGame.propTypes = {
  getRiskGame: PropTypes.func.isRequired
}

export default connect(null, {getRiskGame})(RiskGame)
