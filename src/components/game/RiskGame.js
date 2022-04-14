import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getRiskGame } from '../../actions/gameActions';
import RiskBoard from './RiskBoard'
import PropTypes from "prop-types"
import RiskBoardInfo from './RiskBoardInfo';

function RiskGame(props) {
  const location = useLocation();
  const params = useParams();
  const {tag} = params;
  const navigate = useNavigate();
  const firstRun = useRef(true);


  const [riskGame, setRiskGame] = useState(location.state == null ? {} : location.state.riskGame);


  if(location.state == null) {
    props.getRiskGame(tag, navigate);
  } 
  const gameEmpty = Object.keys(riskGame).length === 0;
  const countries = gameEmpty ? {} : riskGame.board.countryNames;
  const countries_processed = gameEmpty ? {} : Object.keys(countries).reduce(
    (a,v) => ({ ...a, [v.toLowerCase().split(" ").join("_")]: countries[v]}), {});
  const colors = gameEmpty ? {} : riskGame.players.reduce((a,player) =>  ({ ...a, [player.name]: player.color}), {});

  const changeFirstRun = (firstRun) => {
    firstRun.current = false;
    return true;
  }
  return (
    <>
    {!gameEmpty ? 
      <div>  
        <RiskBoard countries={countries_processed} 
                  colors = {colors}
                  game = {riskGame}> 
        </RiskBoard> 
        <RiskBoardInfo players={riskGame.players} 
                       phase = {riskGame.phase}
                       currentPlayer={riskGame.currentPlayerName}
                       reinforceTroops={riskGame.currentReinforcementTroopsNumber}
                       colors={colors}
                       ></RiskBoardInfo>
      </div>
      : firstRun.current ? changeFirstRun(firstRun) && window.location.reload(false) : <></>}
    </>
  )
}
const mapStateToProps = state => ({
  riskGame: state.riskGame
})

RiskGame.propTypes = {
  getRiskGame: PropTypes.func.isRequired,
  riskGame: PropTypes.object.isRequired
}

export default connect(mapStateToProps, {getRiskGame})(RiskGame)
