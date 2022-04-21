import { COUNTRY_CLICKED, RISK_GAME } from "../actions/types";

const initialState = {};

export default function(state=initialState, action) {
    const secondCountryClicked = state.countryClicked && state.countryClicked.firstCountryClicked && 
                                action.payload && action.payload.secondCountryClicked;
    const firstCountryClicked = !secondCountryClicked && 
                                action.payload && action.payload.firstCountryClicked;
    switch(action.type) {
        case RISK_GAME:
            return {...state, game: action.payload};
        case COUNTRY_CLICKED:
            return {...state, countryClicked: {...state.countryClicked, ...action.payload, 
                secondCountryClicked: secondCountryClicked,
                firstCountryClicked: firstCountryClicked,
                firstCountry: secondCountryClicked && state.countryClicked.country }};
        default:
            return {...state};
    }
}