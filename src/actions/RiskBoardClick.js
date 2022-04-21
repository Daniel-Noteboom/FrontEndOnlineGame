import axios from "axios";
import { COUNTRY_CLICKED } from "./types";
import { TOP_LEVEL_ID, X_OFFSET_BOX, Y_OFFSET_BOX } from "../components/game/RiskBoardTypes";

export const clickSVG = (e, game, countries, firstCountry) => async dispatch => {
    if(!(e.target.id === TOP_LEVEL_ID)) {
        let circle = e.target.nextSibling;
        if(e.target instanceof SVGCircleElement) {
            circle = e.target;
        } else if(e.target instanceof SVGTextElement) {
            circle = e.target.previousSibling;
        }
        const countryId = circle.previousSibling.id;

        const x = parseInt(circle.getAttribute("cx"));
        const y = parseInt(circle.getAttribute("cy"));
        const samePlayer = countries[countryId].occupant.name === game.currentPlayerName;
        const firstCountryClicked = game.phase !== "DRAFT" && samePlayer && countries[countryId].troops !== 1;
        let secondCountryClicked = false;
        if(game.phase === "ATTACK" && firstCountry) {
            const res = await axios.get(`http://localhost:8080/game/risk/${game.tag}/opposing/${firstCountry}`);
            const opposingCountries = res.data;
            secondCountryClicked = opposingCountries.includes(countries[countryId].name);
        } else if(game.phase === "FORTIFY" && firstCountry) {
            const res = await axios.get(`http://localhost:8080/game/risk/${game.tag}/fortify/${firstCountry}`);
            const fortifyCountries = res.data;
            secondCountryClicked = fortifyCountries.includes(countries[countryId].name);
        }
        const payload = {country: countryId, x: x - X_OFFSET_BOX, y: y - Y_OFFSET_BOX, 
                        firstCountryClicked: firstCountryClicked, secondCountryClicked: secondCountryClicked, samePlayer: samePlayer};
        dispatch({
            type: COUNTRY_CLICKED,
            payload: payload
        })
    } else {
        dispatch({
            type: COUNTRY_CLICKED,
            payload: {}
        })
    }
     
}  
