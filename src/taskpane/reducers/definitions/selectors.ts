import { ReduxState } from "../index";
import { TermsObject } from "./types";

export const getTermsInParagraph =
  (paragraph: string) =>
  (state: ReduxState): string[] => {
    const wordsFromParagraph = paragraph.match(/\w+/g);
    // all terms are lowercase, so we need to lowercase the words so they can match
    const lowerCasedWords = wordsFromParagraph.map((word) => word.toLowerCase());
    const { terms } = state.definitions;

    return terms.filter((term) => lowerCasedWords.includes(term));
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
