import { DefinitionsHash, DefinitionsState, TermsObject } from "./types";

const getTermsFromParagraph = (paragraph: string): TermsObject => {
  const termEndIndex = paragraph.indexOf("”");
  const term = paragraph.substr(1, termEndIndex - 1).toLowerCase();
  const definition = paragraph.substr(termEndIndex + 2);
  return { term, definition };
};

const getHashFromObjects = <ObjectType>(objects: ObjectType[], key: string, valueKey: string): DefinitionsHash => {
  return objects.reduce((accumulator, object) => ({ ...accumulator, [object[key]]: object[valueKey] }), {});
};

const getDefinitionsHashFromParagraphs = (paragraphs: string[]): DefinitionsHash => {
  const paragraphsWithDefinitions = paragraphs.filter((p) => p[0] === "“");
  const termsAndDefinitions = paragraphsWithDefinitions.map(getTermsFromParagraph);

  return getHashFromObjects<TermsObject>(termsAndDefinitions, "term", "definition");
};

export const getDefinitionsStateFromParagraphs = (paragraphs: string[]): Partial<DefinitionsState> => {
  const termsAndDefinitions = getDefinitionsHashFromParagraphs(paragraphs);
  return {
    paragraphs,
    definitionsHash: termsAndDefinitions,
    terms: Object.keys(termsAndDefinitions),
  };
};
