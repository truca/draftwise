import { combineReducers } from "redux";
import definitions from "./definitions";
import routes, { RouteState } from "./routes";
import { DefinitionsActions, DefinitionsState, DefinitionsTypes } from "./definitions/types";

export type ActionTypes = DefinitionsTypes;
export type Actions = DefinitionsActions;

export interface ReduxState {
  definitions: DefinitionsState;
  routes: RouteState;
}

export default combineReducers({
  definitions,
  routes,
});
