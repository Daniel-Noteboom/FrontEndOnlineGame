import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"
import { createRiskGame } from '../../actions/gameActions'
import { useNavigate } from 'react-router-dom'
import classnames from "classnames";

function StartGame(props) {
  const navigate = useNavigate();
  const errors = props.errors;
  const [riskGame, setRiskGame] = useState({
    "tag": "",
  });
  const onSubmit = (e) =>  {
    e.preventDefault();
    props.createRiskGame(riskGame, navigate);
  }

  const onChange = (e) => {
    setRiskGame({[e.target.name] : e.target.value});
  }
  return (
    <form onSubmit={onSubmit} className="start_form">
        <div className="form-group">
        <label htmlFor="risk_tag">Start a New Game</label>
        <input type="text" 
                className={classnames("form-control form-control-lg", {
                  "is-invalid": errors.gameTag
              })}    
                placeholder="Unique game tag"
                name="tag"
                value={riskGame.tag}
                onChange={onChange}
        />
        { errors.gameTag && 
          <p className="invalid-feedback">
              {errors.gameTag}
          </p>
            
      }
        </div>
        <button type="submit" className="btn btn-primary">Start Game</button>
  </form> 
  )
}

const mapStateToProps = state => ({
  errors: state.errors
})

StartGame.propTypes = {
  createRiskGame: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}
export default connect(mapStateToProps, {createRiskGame})(StartGame)
