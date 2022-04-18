import React from 'react'

export default function(props) {
    const {players, phase, currentPlayer, reinforceTroops, colors} = props;
  return (
    <>
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
        <p className = "current_info" style={{ border: "3px solid " + colors[currentPlayer] }}> CurrentPlayer: {currentPlayer} </p>
    </>
  )
}
