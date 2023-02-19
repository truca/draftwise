import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import Header from "./Header";
import Progress from "./Progress";
import { DefinitionsTypes, TermsObject } from "../reducers/definitions/types";
import { Actions, ReduxState } from "../reducers";
import { getTermsWithDefinitions } from "../reducers/definitions/selectors";
import Term from "./Term";

/* global Word, require */

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
  const termsWithDefinitions = useSelector<ReduxState, TermsObject[]>(getTermsWithDefinitions);

  const getParagraphsFromWord = () => {
    return Word.run(async (context) => {
      const newParagraph = context.document.body.insertParagraph("Hello World", Word.InsertLocation.end);
      newParagraph.font.color = "blue";

      const paragraphs = context.document.body.paragraphs;
      paragraphs.load("text");
      await context.sync();

      const paragraphsTexts = [];
      for (var i = 0; i < paragraphs.items.length; i++) {
        paragraphsTexts.push(paragraphs.items[i].text);
      }

      dispatch({
        type: DefinitionsTypes.INITIALIZE_DEFINITIONS,
        paragraphs: paragraphsTexts,
      });
    });
  };

  useEffect(() => {
    getParagraphsFromWord();
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
      <Header logo={require("./../../../assets/logo.png")} title={props.title} message="Welcome" />
      <div>
        {termsWithDefinitions.map(({ term, definition }) => (
          <Term key={term} term={term} definition={definition} />
        ))}
      </div>
    </div>
  );
};

export default App;
