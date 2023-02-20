import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import Header from "./Header";
import Progress from "./Progress";
import { DefinitionsTypes } from "../reducers/definitions/types";
import { Actions } from "../reducers";
import TermsList from "./TermsList";

/* global Word, Office, require */

const getParagraphTexts = async (
  paragraphs: Word.ParagraphCollection,
  context: Word.RequestContext
): Promise<string[]> => {
  paragraphs.load("text");
  await context.sync();

  return paragraphs.items.map((paragraph) => paragraph.text);
};

export interface AppProps {
  title: string;
  isOfficeInitialized: boolean;
}

export interface AppState {
  paragraphs: string[];
  dictionary: { term: string; definition: string }[];
}

const App = (props: AppProps) => {
  const { title, isOfficeInitialized } = props;
  const dispatch = useDispatch<Dispatch<Actions>>();

  const getParagraphsFromWord = () => {
    return Word.run(async (context) => {
      const paragraphs = context.document.body.paragraphs;
      const paragraphsTexts = await getParagraphTexts(paragraphs, context);

      dispatch({
        type: DefinitionsTypes.INITIALIZE_DEFINITIONS,
        paragraphs: paragraphsTexts,
      });
    });
  };

  const getSelectedParagraphsFromWord = () => {
    return Word.run(async (context) => {
      const paragraphs = context.document.getSelection().paragraphs;
      const paragraphsTexts = await getParagraphTexts(paragraphs, context);

      dispatch({
        type: DefinitionsTypes.SET_SELECTED_PARAGRAPH_TEXT,
        paragraphText: paragraphsTexts.join(" "),
      });
    });
  };

  const addHandlerToSelectionChange = () => {
    Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, getSelectedParagraphsFromWord);
  };

  const removeHandlerToSelectionChange = () => {
    Office.context.document.removeHandlerAsync(Office.EventType.DocumentSelectionChanged, {
      handler: getSelectedParagraphsFromWord,
    });
  };

  useEffect(() => {
    getParagraphsFromWord();
    addHandlerToSelectionChange();

    return removeHandlerToSelectionChange;
  }, []);

  if (!isOfficeInitialized) {
    return (
      <Progress
        title={title}
        logo={require("./../../../assets/logo.png")}
        message="Please sideload your addin to see app body."
      />
    );
  }

  return (
    <div className="ms-welcome">
      <Header logo={require("./../../../assets/logo.png")} title={props.title} message="DraftWise" />
      <TermsList />
    </div>
  );
};

export default App;
