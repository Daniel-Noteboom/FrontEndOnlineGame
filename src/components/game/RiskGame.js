import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { endAttack, endFortify, getRiskGame, startNewGame } from '../../actions/gameActions';
import RiskBoard from './RiskBoard'
import PropTypes from "prop-types"
import RiskBoardInfo from './RiskBoardInfo';
import RiskPopUpBox from './RiskPopUpBox';

function RiskGame(props) {
  const params = useParams();
  const {tag} = params;
  const navigate = useNavigate();


  const riskGame = props.riskGame.game;
  const {countryClicked} = props.riskGame;

  const gameEmpty = riskGame === undefined;
  useEffect(() => {
    if(props.riskGame.game === undefined) {
      props.getRiskGame(tag, navigate);
    }
  })

  const endAttack = () => {
    props.endAttack(tag);
  }

  const endFortify = () => {
    props.endFortify(tag);
  }

  const startNewGame = () => {
    props.startNewGame(navigate);
  }

  const showPopUpBox = (countries_processed) => {
    const {samePlayer} = countryClicked;
    if(riskGame.needTurnInCards) {
      return false;
    }
    else if(riskGame.phase === "DRAFT") {
      return samePlayer;
    } else  {
      return countryClicked.secondCountryClicked && !(riskGame.phase === "ATTACK" && 
      countryClicked.firstCountry && countries_processed[countryClicked.firstCountry].troops === 1);
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
           <RiskPopUpBox game = {riskGame}
                          countryClicked= {countryClicked}
                          countries={countries_processed}></RiskPopUpBox> }
        <RiskBoardInfo reinforceTroops={riskGame.currentReinforcementTroopsNumber}
                       colors={colors}
                       riskGame={riskGame}
                       ></RiskBoardInfo>
        {riskGame.phase === "ATTACK" && !riskGame.needTurnInCards && <button onClick ={endAttack} className="btn btn-primary">End Attack</button>}
        {riskGame.phase === "FORTIFY" && <button onClick ={endFortify} className="btn btn-primary">End Fortify</button>}
        {riskGame.phase === "ENDGAME" && <button onClick={startNewGame} className="btn btn-primary"> Start New Game</button>}


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
  riskGame: PropTypes.object.isRequired,
  endAttack: PropTypes.func.isRequired,
  endFortify: PropTypes.func.isRequired,
  startNewGame: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {getRiskGame, endAttack, endFortify, startNewGame})(RiskGame)
