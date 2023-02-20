import { ReduxState } from "../index";
import { TermsObject } from "./types";

export const getTermsInParagraph = (state: ReduxState): string[] => {
  const paragraph = state.definitions.selectedParagraphText;
  const wordsFromParagraph = paragraph.match(/\w+/g);

  if (!wordsFromParagraph) return [];
  const lowerCasedWords = wordsFromParagraph.map((word) => word.toLowerCase());
  const { terms } = state.definitions;

  return terms.filter((term) => lowerCasedWords.includes(term));
};

export const getTermsWithDefinitionsInParagraph = (state: ReduxState): TermsObject[] => {
  const terms = getTermsInParagraph(state);

  return terms.map((term) => {
    const definition = getTermDefinition(term, state);
    return { term, definition };
  });
};

export const getTermDefinition = (term: string, state: ReduxState): string | null => {
  const { definitionsHash } = state.definitions;

  return definitionsHash[term];
};

export const getTerms = (state: ReduxState): string[] => {
  const { terms } = state.definitions;

  return terms;
};

export const getTermsWithDefinitions = (state: ReduxState): TermsObject[] => {
  const terms = getTerms(state);

  return terms.map((term) => {
    const definition = getTermDefinition(term, state);
    return { term, definition };
  });
};

export const selectedParagraphTextSelector = (state: ReduxState): string => {
  return state.definitions.selectedParagraphText;
};
