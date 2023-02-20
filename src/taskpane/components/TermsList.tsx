import React from "react";
import { useSelector } from "react-redux";
import { getTermsWithDefinitions, getTermsWithDefinitionsInParagraph } from "../reducers/definitions/selectors";
import { Routes } from "../reducers/routes";
import { routeSelector } from "../reducers/routes/selectors";
import Term from "./Term";

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TermsList = () => {
  const route = useSelector(routeSelector);
  const sectionTitle = getTitleFromRoute(route);
  const allTermsWithDefinitions = useSelector(getTermsWithDefinitions);
  const termsWithDefinitionsInParagraph = useSelector(getTermsWithDefinitionsInParagraph);

  const termsWithDefinitions = route === Routes.DOCUMENT ? allTermsWithDefinitions : termsWithDefinitionsInParagraph;

  return (
    <section className="mx-2 mt-4 mb-12">
      <h1 className="text-xl font-semibold tracking-wide">{sectionTitle}</h1>
      {termsWithDefinitions.map(({ term, definition }) => (
        <Term key={term} term={term} definition={definition} />
      ))}
    </section>
  );
};

export default TermsList;
