import { COUNTRY_CLICKED, RESTART_GAME, RISK_GAME } from "../actions/types";

const initialState = {};

export default function(state=initialState, action) {
    const secondCountryClicked = state.countryClicked && state.countryClicked.firstCountryClicked && 
                                action.payload && action.payload.secondCountryClicked;
    const firstCountryClicked = !secondCountryClicked && 
                                action.payload && action.payload.firstCountryClicked;
    const resetCountryClicked = state.game && action.payload && (state.game.phase !== action.payload.phase || 
                                (state.game.minimumTroopsDefeatedCountry !== 0 && action.payload.minimumTroopsDefeatedCountry === 0)
                                    || (state.game.currentReinforcementTroopsNumber !== action.payload.currentReinforcementTroopsNumber));
    
    switch(action.type) {
        case RISK_GAME:
            return {...state, game: action.payload, countryClicked: resetCountryClicked ? {} : {...state.countryClicked, 
                firstCountryClicked: state.countryClicked === undefined ? action.payload && action.payload.currentVictorCountry :
                state.countryClicked.firstCountryClicked, 
                secondCountryClicked: state.countryClicked === undefined ? action.payload && action.payload.currentDefeatedCountry :
                state.countryClicked.secondCountryClicked}};
        case COUNTRY_CLICKED:
            return {...state, countryClicked: {...state.countryClicked, ...action.payload, 
                secondCountryClicked: secondCountryClicked,
                firstCountryClicked: firstCountryClicked,
                firstCountry: secondCountryClicked && state.countryClicked.country }};
        case RESTART_GAME:
            return {...state, game: {}, countryClicked: {}}
        default:
            return {...state};
    }
}