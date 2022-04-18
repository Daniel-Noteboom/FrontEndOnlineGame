import { COUNTRY_CLICKED, RISK_GAME } from "../actions/types";

const initialState = {};

export default function(state=initialState, action) {
    switch(action.type) {
        case RISK_GAME:
            return {...state, game: action.payload};
        case COUNTRY_CLICKED:
            return {...state, countryClicked: action.payload}
        default:
            return {...state};
    }
}