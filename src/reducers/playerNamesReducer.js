import {PLAYER_NAMES} from "../actions/types";

const initialState = {};

export default function(state=initialState, action) {
    switch(action.type) {
        case PLAYER_NAMES:

            return action.payload.map(function (player) {
                return player.name
            });
        default:
            return [];
    }
}