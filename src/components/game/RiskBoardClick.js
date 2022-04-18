import { COUNTRY_CLICKED } from "../../actions/types";
import { X_OFFSET_BOX, Y_OFFSET_BOX } from "./RiskBoardTypes";

export const clickSVG = (e) => dispatch => {
    let circle = e.target.nextSibling;
    if(e.target instanceof SVGCircleElement) {
        circle = e.target;
    } else if(e.target instanceof SVGTextElement) {
        circle = e.target.previousSibling;
    }
    const countryId = circle.previousSibling.id;

    const x = parseInt(circle.getAttribute("cx"));
    const y = parseInt(circle.getAttribute("cy"));
    const payload = {country: countryId, x: x - X_OFFSET_BOX, y: y - Y_OFFSET_BOX}
    dispatch({
        type: COUNTRY_CLICKED,
        payload: payload
    })
}