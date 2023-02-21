import React from "react";
import Header from "./index";
import renderer from "react-test-renderer";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import store from "../../store";
import { Provider } from "react-redux";

describe("Header", () => {
  describe("rendering", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <Header title="Title" message="DraftWise" />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders with other props", () => {
      const tree = renderer
        .create(
          <Provider store={store}>
            <Header title="Title 2" message="DraftWise 2" />
          </Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("changing route", () => {
    it("paragraph", async () => {
      render(
        <Provider store={store}>
          <Header title="Title 2" message="DraftWise 2" />
        </Provider>
      );
      expect(screen.getByLabelText("document-active")).toBeDefined();
      expect(screen.getByLabelText("paragraph")).toBeDefined();

      // ACT
      await userEvent.click(screen.getByLabelText("paragraph"));
      expect(screen.getByLabelText("document")).toBeDefined();
      expect(screen.getByLabelText("paragraph-active")).toBeDefined();
    });
  });
});
