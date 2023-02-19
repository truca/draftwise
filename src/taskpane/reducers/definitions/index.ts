import { getDefinitionsStateFromParagraphs } from "./helpers";
import { DefinitionsActions, DefinitionsState, DefinitionsTypes } from "./types";

const initialState: DefinitionsState = {
  paragraphs: [],
  terms: [],
  definitionsHash: {},
};

const definitions = (state: DefinitionsState = initialState, action: DefinitionsActions) => {
  switch (action.type) {
    case DefinitionsTypes.INITIALIZE_DEFINITIONS:
      // eslint-disable-next-line no-case-declarations
      const definitions = getDefinitionsStateFromParagraphs(action.paragraphs);
      return {
        ...state,
        terms: definitions.terms,
        definitionsHash: definitions.definitionsHash,
        paragraphs: action.paragraphs,
      };
    default:
      return state;
  }
};

export default definitions;
