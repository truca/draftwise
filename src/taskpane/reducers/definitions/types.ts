export enum DefinitionsTypes {
  INITIALIZE_DEFINITIONS = "INITIALIZE_DEFINITIONS",
}

export type InitializeAction = {
  type: DefinitionsTypes.INITIALIZE_DEFINITIONS;
  paragraphs: string[];
};

export type DefinitionsActions = InitializeAction;

export interface DefinitionsState {
  paragraphs: string[];
  terms: string[];
  definitionsHash: { [term: string]: string };
}

export type TermsObject = {
  term: string;
  definition: string;
};

export type DefinitionsHash = { [term: string]: string };
