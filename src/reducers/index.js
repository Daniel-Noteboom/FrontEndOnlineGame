import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import playerNamesReducer from "./playerNamesReducer";
import riskGameReducer from "./riskGameReducer";

export default combineReducers ({
    errors: errorReducer,
    playerNames: playerNamesReducer,
    riskGame: riskGameReducer
});