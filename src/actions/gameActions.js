import axios from "axios";
import { GET_ERRORS, PLAYER_NAMES, RESTART_GAME, RISK_GAME} from "./types";

export const createRiskGame = (tag, navigate) => async dispatch => {
    try {
        await axios.post(`http://localhost:8080/game/risk`, tag);
        navigate(`add_players/${tag.tag}`);
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}
    

export const addPlayer = (tag, playerName) => async dispatch => {
    const res = await axios.post(`http://localhost:8080/game/risk/${tag}/add_player/${playerName}`);
    dispatch({
        type: PLAYER_NAMES,
        payload: res.data.players
    })
    //Currently no errors are thrown for this method but eventually want to limit players to six
}

export const startRiskGame = (tag, navigate) => async dispatch => {
    const res = await axios.post(`http://localhost:8080/game/risk/${tag}/start_game`);
    navigate(`/${tag}`, {state: {riskGame: res.data}});
    //Currently no errors but want to implement later  
}

export const getRiskGame = (tag, navigate) => async dispatch => {
    const res = await axios.get(`http://localhost:8080/game/risk/${tag}`);
    dispatch({
        type: RISK_GAME,
        payload: res.data
    })
    //Currently no errors but want to implement later  
}

export const reinforceTroops = (tag, country, troops) => async dispatch => {
    
    const res = await axios.post(`http://localhost:8080/game/risk/${tag}/reinforce_troops/${country}/${troops}`);
    dispatch({
        type: RISK_GAME,
        payload: res.data
    })
    //Currently no errors but want to implement later  
}

export const attackTroops = (tag, attackCountry, defendCountry, troops) => async dispatch => {
    
    const res = await axios.post(`http://localhost:8080/game/risk/${tag}/attack/${attackCountry}/${troops}/${defendCountry}`);
    dispatch({
        type: RISK_GAME,
        payload: res.data
    })
    //Currently no errors but want to implement later  
}

export const setTroops = (tag, troops) => async dispatch => {
    
    const res = await axios.post(`http://localhost:8080/game/risk/${tag}/set_defeated_troops/${troops}`);
    dispatch({
        type: RISK_GAME,
        payload: res.data
    })
    //Currently no errors but want to implement later  
}

export const endAttack = (tag) => async dispatch => {
    
    const res = await axios.post(`http://localhost:8080/game/risk/${tag}/end_attack`);
    dispatch({
        type: RISK_GAME,
        payload: res.data
    })
    //Currently no errors but want to implement later  
}

export const fortifyTroops = (tag, attackCountry, defendCountry, troops) => async dispatch => {
    
    const res = await axios.post(`http://localhost:8080/game/risk/${tag}/fortify/${attackCountry}/${troops}/${defendCountry}`);
    dispatch({
        type: RISK_GAME,
        payload: res.data
    })
    //Currently no errors but want to implement later  
}

export const endFortify = (tag) => async dispatch => {
    
    const res = await axios.post(`http://localhost:8080/game/risk/${tag}/end_fortify`);
    dispatch({
        type: RISK_GAME,
        payload: res.data
    })
    //Currently no errors but want to implement later  
}
export const turnInCardsAuto = (tag) => async dispatch => {
    
    const res = await axios.post(`http://localhost:8080/game/risk/${tag}/turn_in_cards_auto`);
    dispatch({
        type: RISK_GAME,
        payload: res.data
    })
    //Currently no errors but want to implement later  
}

export const turnInCards = (tag, listCardIndexes) => async dispatch => {
    
    try {
        const res = await axios.post(`http://localhost:8080/game/risk/${tag}/turn_in_cards`, listCardIndexes);
        dispatch({
            type: RISK_GAME,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
    //Currently no errors but want to implement later  
}

export const startNewGame = (navigate) => dispatch => {
    dispatch({
        type: RESTART_GAME,
        payload: {}
    })
    navigate("/");
    //Currently no errors but want to implement later  
}