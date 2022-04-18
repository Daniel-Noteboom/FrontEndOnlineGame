import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getRiskGame } from '../../actions/gameActions';
import RiskBoard from './RiskBoard'
import PropTypes from "prop-types"
import RiskBoardInfo from './RiskBoardInfo';
import RiskPopUpBox from './RiskPopUpBox';

function RiskGame(props) {
  const location = useLocation();
  const params = useParams();
  const {tag} = params;
  const navigate = useNavigate();


  const riskGame = location.state == null ? props.riskGame.game : location.state.riskGame;
  const {countryClicked} = props.riskGame;
  const country = countryClicked != null ? countryClicked.country
                                          .split("_").reduce((s1,s2) => s1 + " " + 
                                          s2.charAt(0).toUpperCase() + s2.slice(1), "").slice(1) : null;

  const gameEmpty = riskGame === undefined;
  useEffect(() => {
    if(location.state == null && props.riskGame.game === undefined) {
      props.getRiskGame(tag, navigate);
    }
  })
  const countries = gameEmpty ? {} : riskGame.board.countryNames;
  const countries_processed = gameEmpty ? {} : Object.keys(countries).reduce(
    (a,v) => ({ ...a, [v.toLowerCase().split(" ").join("_")]: countries[v]}), {});
  const colors = gameEmpty ? {} : riskGame.players.reduce((a,player) =>  ({ ...a, [player.name]: player.color}), {});
  return (
    <>
    {!gameEmpty ? 
      <div>  
        <RiskBoard countries={countries_processed} 
                  colors = {colors}> 
        </RiskBoard> 
        {countryClicked && 
          countries[country].occupant.name === riskGame.currentPlayerName && 
           <RiskPopUpBox riskGame = {props.riskGame}></RiskPopUpBox> }
        <RiskBoardInfo players={riskGame.players} 
                       phase = {riskGame.phase}
                       currentPlayer={riskGame.currentPlayerName}
                       reinforceTroops={riskGame.currentReinforcementTroopsNumber}
                       colors={colors}
                       ></RiskBoardInfo>
      </div>
      : <></>}
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
