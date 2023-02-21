import { getDefinitionsStateFromParagraphs } from "./helpers";
import { DefinitionsActions, DefinitionsState, DefinitionsTypes } from "./types";

export const initialState: DefinitionsState = {
  selectedParagraphText: "",
  paragraphs: [],
  terms: [],
  definitionsHash: {},
};

const definitions = (state: DefinitionsState = initialState, action?: DefinitionsActions) => {
  switch (action?.type) {
    case DefinitionsTypes.INITIALIZE_DEFINITIONS:
      // eslint-disable-next-line no-case-declarations
      const definitions = getDefinitionsStateFromParagraphs(action.paragraphs);
      return {
        ...state,
        terms: definitions.terms,
        definitionsHash: definitions.definitionsHash,
        paragraphs: action.paragraphs,
      };
    case DefinitionsTypes.SET_SELECTED_PARAGRAPH_TEXT:
      return { ...state, selectedParagraphText: action.paragraphText };
    default:
      return state;
  }
};

export default definitions;
