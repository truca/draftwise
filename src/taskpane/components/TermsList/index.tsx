import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { List, CellMeasurer, CellMeasurerCache } from "react-virtualized";

import { getTermsWithDefinitions, getTermsWithDefinitionsInParagraph } from "../../reducers/definitions/selectors";
import { Routes } from "../../reducers/routes";
import { routeSelector } from "../../reducers/routes/selectors";
import Term from "./Term";

/* global window */

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

const TermsList = () => {
  const listRef = useRef<List>();
  const [tallRows, setTallRows] = useState([]);
  const route = useSelector(routeSelector);
  const sectionTitle = getTitleFromRoute(route);
  const allTermsWithDefinitions = useSelector(getTermsWithDefinitions);
  const termsWithDefinitionsInParagraph = useSelector(getTermsWithDefinitionsInParagraph);

  const termsWithDefinitions = route === Routes.DOCUMENT ? allTermsWithDefinitions : termsWithDefinitionsInParagraph;

  const getRowHeight = ({ index }) => {
    const response = tallRows.includes(index) ? cache.getHeight(index) : 150;
    return response;
  };

  function rowRenderer({ key, index, style, parent }) {
    const { term, definition } = termsWithDefinitions[index];
    return (
      <CellMeasurer cache={cache} key={key} parent={parent} columnIndex={0} rowIndex={index}>
        {() => (
          <div style={style}>
            <Term
              key={term}
              term={term}
              definition={definition}
              onToggleExpand={() => {
                const isExpanded = tallRows.includes(index);
                const newTallRows = isExpanded
                  ? tallRows.filter((tallIndex) => tallIndex !== index)
                  : [...tallRows, index];
                setTallRows(newTallRows);
              }}
            />
          </div>
        )}
      </CellMeasurer>
    );
  }

  const cache = new CellMeasurerCache({
    defaultHeight: 150,
    minHeight: 150,
    fixedWidth: true,
  });

  return (
    <section className="mx-2 mt-4 mb-12">
      <h1 className="text-xl font-semibold tracking-wide">{sectionTitle}</h1>

      <List
        ref={listRef}
        autoHeight
        deferredMeasurementCache={cache}
        overscanRowCount={0}
        width={window.innerWidth - 32}
        height={window.innerHeight - 80}
        rowCount={termsWithDefinitions.length}
        rowHeight={getRowHeight}
        rowRenderer={rowRenderer}
      />
    </section>
  );
};

export default TermsList;
