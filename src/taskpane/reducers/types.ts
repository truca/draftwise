export enum DefinitionsTypes {
  INITIALIZE,
}

export type InitializeAction = { type: DefinitionsTypes.INITIALIZE; paragraphs: string[] };

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
