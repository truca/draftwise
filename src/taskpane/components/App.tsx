import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import Header from "./Header";
import Progress from "./Progress";
import { DefinitionsTypes, TermsObject } from "../reducers/definitions/types";
import { Actions, ReduxState } from "../reducers";
import { getTermsWithDefinitions } from "../reducers/definitions/selectors";
import Term from "./Term";
import { routeSelector } from "../reducers/routes/selectors";
import { Routes } from "../reducers/routes";

/* global Word, require */

const getTitleFromRoute = (route: Routes): string => {
  switch (route) {
    case Routes.DOCUMENT:
      return "Document Terms";
    case Routes.PARAGRAPH:
      return "Paragraph Terms";
    default:
      return "Paragraph Terms";
  }
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
  const termsWithDefinitions = useSelector<ReduxState, TermsObject[]>(getTermsWithDefinitions);
  const route = useSelector(routeSelector);
  const sectionTitle = getTitleFromRoute(route);

  const getParagraphsFromWord = () => {
    return Word.run(async (context) => {
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
      <Header logo={require("./../../../assets/logo.png")} title={props.title} message="DraftWise" />
      <div className="mx-2 mt-4 mb-12">
        <h1 className="text-xl font-semibold tracking-wide">{sectionTitle}</h1>
        {termsWithDefinitions.map(({ term, definition }) => (
          <Term key={term} term={term} definition={definition} />
        ))}
      </div>
    </div>
  );
};

export default App;
