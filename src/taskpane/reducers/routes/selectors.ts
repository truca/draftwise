import { Routes } from "./index";
import { ReduxState } from "../index";

export const routeSelector = (state: ReduxState): Routes => {
  return state.routes.route;
};
