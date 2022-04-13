import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import playerNamesReducer from "./playerNamesReducer";
export default combineReducers ({
    errors: errorReducer,
    playerNames: playerNamesReducer
});