export enum DefinitionsTypes {
  INITIALIZE_DEFINITIONS = "INITIALIZE_DEFINITIONS",
  SET_SELECTED_PARAGRAPH_TEXT = "SET_SELECTED_PARAGRAPH_TEXT",
}

export type InitializeAction = {
  type: DefinitionsTypes.INITIALIZE_DEFINITIONS;
  paragraphs: string[];
};

export type SetSelectedParagraphTextAction = {
  type: DefinitionsTypes.SET_SELECTED_PARAGRAPH_TEXT;
  paragraphText: string;
};

export type DefinitionsActions = InitializeAction | SetSelectedParagraphTextAction;

export interface DefinitionsState {
  selectedParagraphText: string;
  paragraphs: string[];
  terms: string[];
  definitionsHash: { [term: string]: string };
}

export type TermsObject = {
  term: string;
  definition: string;
};

export type DefinitionsHash = { [term: string]: string };
