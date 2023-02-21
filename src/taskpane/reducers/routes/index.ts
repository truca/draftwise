export enum Routes {
  PARAGRAPH = "PARAGRAPH",
  DOCUMENT = "DOCUMENT",
}

export interface RouteState {
  route: Routes;
}

export enum RouteActionTypes {
  CHANGE_ROUTE = "CHANGE_ROUTE",
}

type ChangeRouteAction = { type: RouteActionTypes.CHANGE_ROUTE; route: Routes };
export type RouteActions = ChangeRouteAction;

export const initialState: RouteState = {
  route: Routes.DOCUMENT,
};

const routes = (state: RouteState = initialState, action?: RouteActions) => {
  switch (action?.type) {
    case RouteActionTypes.CHANGE_ROUTE:
      return { ...state, route: action.route };
    default:
      return state;
  }
};

export default routes;
