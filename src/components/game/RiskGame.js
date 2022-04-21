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

  const gameEmpty = riskGame === undefined;
  useEffect(() => {
    if(location.state == null && props.riskGame.game === undefined) {
      props.getRiskGame(tag, navigate);
    }
  })

  const showPopUpBox = (countries_processed) => {
    const {samePlayer} = countryClicked;
    if(riskGame.phase === "DRAFT") {
      return samePlayer;
    } else  {
      return countryClicked.secondCountryClicked;
    }
  }
  const countries = gameEmpty ? {} : riskGame.board.countryNames;
  const countries_processed = gameEmpty ? {} : Object.keys(countries).reduce(
    (a,v) => ({ ...a, [v.toLowerCase().split(" ").join("_")]: countries[v]}), {});
  const colors = gameEmpty ? {} : riskGame.players.reduce((a,player) =>  ({ ...a, [player.name]: player.color}), {});
  return (
    <>
    {!gameEmpty ? 
      <div>  
        <RiskBoard countries={countries_processed} 
                  colors = {colors}
                  game = {riskGame}
                  firstCountry = {countryClicked && countryClicked.firstCountryClicked ? countryClicked.country : null}>
        </RiskBoard> 
        { countryClicked &&
          showPopUpBox(countries_processed) && 
           <RiskPopUpBox riskGame = {props.riskGame}
                          countryClicked= {countryClicked}
                          countries={countries_processed}></RiskPopUpBox> }
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
