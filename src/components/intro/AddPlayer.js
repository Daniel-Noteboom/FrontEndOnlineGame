import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { addPlayer, startRiskGame } from '../../actions/gameActions';
function AddPlayer(props) {
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const {tag} = params;
  const {playerNames} = props;
  const onSubmit = (e) =>  {
    e.preventDefault();
    props.addPlayer(tag, playerName, navigate);
  }

  const onChange = (e) => {
    setPlayerName(e.target.value);
  }

  const startGame = (e) => {
    props.startRiskGame(tag, navigate);
  }
  return (
    <div>
      <h3> Add Player</h3>
    <form onSubmit={onSubmit} className="start_form">
      <div className="form-group">
      <label htmlFor="risk_player">Add another player</label>
      <input type="text" 
              className="form-control form-control-lg"  
              placeholder="Player Name"
              name="name"
              value={playerName}
              onChange={onChange}
      />
      </div>

      <button type="submit" className="btn btn-primary add_player_button">Add Player</button>
      <button onClick ={startGame} className="btn btn-primary start_game_button">Start Game</button>
    </form> 
    
    <h4 className="heading">Players </h4> 
    <ul>
    {
      playerNames && playerNames.map(name =>
        <li> {name} </li> 
      )
    }
    </ul> 
    </div>
    
  )
}
const mapStateToProps = state => ({
  playerNames: state.playerNames
})

AddPlayer.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  playerNames: PropTypes.object.isRequired,
  startRiskGame: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {addPlayer, startRiskGame})(AddPlayer)
