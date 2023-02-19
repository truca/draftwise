import { combineReducers } from "redux";
import definitions from "./definitions";
import { DefinitionsActions, DefinitionsState, DefinitionsTypes } from "./definitions/types";

export type ActionTypes = DefinitionsTypes;
export type Actions = DefinitionsActions;

export interface ReduxState {
  definitions: DefinitionsState;
}

export default combineReducers({
  definitions,
});
