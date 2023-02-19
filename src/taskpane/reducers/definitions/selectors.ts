import { ReduxState } from "../index";
import { TermsObject } from "./types";

export const getTermsInParagraph =
  (paragraph: string) =>
  (state: ReduxState): string[] => {
    const wordsFromParagraph = paragraph.match(/\w+/g);
    const { terms } = state.definitions;

    return terms.filter((term) => wordsFromParagraph.includes(term));
  };

export const getTermDefinition =
  (term: string) =>
  (state: ReduxState): string | null => {
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
    const definition = getTermDefinition(term)(state);
    return { term, definition };
  });
};
