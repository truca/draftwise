import routes, { initialState, Routes, RouteActionTypes } from "./index";
import { routeSelector } from "./selectors";

describe("routes", () => {
  describe("reducer", () => {
    it("initial state", () => {
      const state = routes();
      expect(state).toMatchSnapshot();
    });
    it("change route", () => {
      const state = routes(initialState, { type: RouteActionTypes.CHANGE_ROUTE, route: Routes.PARAGRAPH });
      expect(state).toMatchSnapshot();
    });
  });

  describe("selectors", () => {
    it("routeSelector", () => {
      const result = routeSelector({
        routes: {
          route: Routes.DOCUMENT,
        },
      } as any);
      expect(result).toMatchSnapshot();
    });
  });
});
