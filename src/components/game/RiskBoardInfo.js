import React, { useRef } from 'react'
import { connect } from 'react-redux';
import PropTypes from "prop-types"
import { turnInCards, turnInCardsAuto } from '../../actions/gameActions';

function RiskBoardInfo(props) {
    const {players, phase, currentPlayerName, canTurnInCards, needTurnInCards, tag} = props.riskGame;
    const {reinforceTroops, colors, errors} = props;
    const currentPlayerCards = players.filter(player => player.name === currentPlayerName)[0].cards;
    const nonTurnInCards = useRef(null);
    const toTurnInCards = useRef(null);
  const turnInCardsAuto = () => {
    props.turnInCardsAuto(tag);
  }

  const turnInCards = (e) => {
    const listCardIndexes = [];
    const cards = toTurnInCards.current.children;
    for (var i = 0; i < cards.length; i++) {
      listCardIndexes.push(cards[i].value);
    }
    props.turnInCards(tag, listCardIndexes);
  }

  const moveCard = (e) => {
    const nonTurnInCardsList = nonTurnInCards.current;
    const toTurnInCardsList = toTurnInCards.current;
    if(e.target.parentElement === nonTurnInCardsList) {
      nonTurnInCardsList.removeChild(e.target);
      toTurnInCardsList.appendChild(e.target);
    } else {
      toTurnInCardsList.removeChild(e.target);
      nonTurnInCardsList.appendChild(e.target);
    }
  }
  const turnInCardsTime = ((canTurnInCards && phase === "DRAFT") || (needTurnInCards && phase === "ATTACK"));
  return (
    <>
      <div>
        <h5 className="players"> Players</h5>
        <ul className="players">
        {players.map(player => (
            <li key={player.name +  " " + player.color} style={{ border: "3px solid " + player.color }}>{player.name} </li>
        ))}
        </ul>
        <p className = "current_info"> CurrentPhase: {phase} </p>
        {phase === "DRAFT" && 
            <p className="current_info"> ReinforceTroops: {reinforceTroops}</p>
        }
        <p className = "current_info" style={{ border: "3px solid " + colors[currentPlayerName] }}> CurrentPlayer: {currentPlayerName} </p>
      </div>
      
      <div className="cards" style={currentPlayerCards.length === 0 ? {marginLeft: "20px"} : {}}>
        <div style={{float: 'left'}}>
          <h5>{currentPlayerCards.length === 0 ? "No Cards" : "Cards"} </h5>
          {((canTurnInCards && phase === "DRAFT") || (needTurnInCards && phase === "ATTACK")) && 
          <button onClick ={turnInCardsAuto} className="btn btn-primary cards-auto-button">Turn In Cards Auto</button>}
        </div>
        <ul ref={nonTurnInCards}>
        {currentPlayerCards.map((card, i) => (
          <li value={card.currentIndex} key={i} onClick={moveCard}> {card.type + " (" + (card.type === "ALL" ? "No bonus" : ("+2 " + card.country)) + ")"}</li> 
        ))}
        </ul>
        { errors.cards && 
          <p style={{display: 'inline-block'}} className="invalid-feedback">
              {errors.cards}
          </p>
        }  
        {turnInCardsTime && 
        <div>
          <h5 style={{float: 'left'}}> Turn In Cards </h5>
          <button onClick ={turnInCards} className="btn btn-primary">Turn In Cards</button>
          <ul style={{display: 'inline-block', float: 'none'}}ref={toTurnInCards}>
          </ul>
        </div>
        }
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  errors: state.errors
})

RiskBoardInfo.propTypes = {
  turnInCardsAuto: PropTypes.func.isRequired,
  turnInCards: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired

}

export default connect(mapStateToProps, {turnInCards, turnInCardsAuto})(RiskBoardInfo)
