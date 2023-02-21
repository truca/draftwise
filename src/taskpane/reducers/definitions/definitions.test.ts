import definitions, { initialState } from "./index";
import {
  getTermsWithDefinitions,
  getTermsWithDefinitionsInParagraph,
  selectedParagraphTextSelector,
} from "./selectors";
import { DefinitionsTypes } from "./types";

const PARAGRAPHS = ["paragraph", "“Expenses” shall include all reasonable attorneys’ fees"];

describe("descriptions", () => {
  describe("reducer", () => {
    it("initial state", () => {
      const state = definitions();
      expect(state).toMatchSnapshot();
    });
    it("initialize definitions", () => {
      const state = definitions(initialState, {
        type: DefinitionsTypes.INITIALIZE_DEFINITIONS,
        paragraphs: PARAGRAPHS,
      });
      expect(state).toMatchSnapshot();
    });
    it("set selected paragraph", () => {
      const state = definitions(initialState, {
        type: DefinitionsTypes.SET_SELECTED_PARAGRAPH_TEXT,
        paragraphText: "paragraph",
      });
      expect(state).toMatchSnapshot();
    });
  });

  describe("selectors", () => {
    it("selectedParagraphText", () => {
      const result = selectedParagraphTextSelector({
        definitions: {
          definitionsHash: {},
          paragraphs: [],
          selectedParagraphText: "paragraph",
          terms: [],
        },
      } as any);
      expect(result).toMatchSnapshot();
    });
    it("getTermsWithDefinitions", () => {
      const result = getTermsWithDefinitions({
        definitions: {
          definitionsHash: {
            expenses: "shall include all reasonable attorneys’ fees",
          },
          paragraphs: ["paragraph", "“Expenses” shall include all reasonable attorneys’ fees"],
          selectedParagraphText: "",
          terms: ["expenses"],
        },
      } as any);
      expect(result).toMatchSnapshot();
    });
    it("getTermsWithDefinitionsInParagraph", () => {
      const result = getTermsWithDefinitionsInParagraph({
        definitions: {
          definitionsHash: {
            expenses: "shall include all reasonable attorneys’ fees",
            fee: "fee",
          },
          paragraphs: ["paragraph", "“Expenses” shall include all reasonable attorneys’ fees"],
          selectedParagraphText: "fee",
          terms: ["expenses", "fee"],
        },
      } as any);
      expect(result).toMatchSnapshot();
    });
  });
});
