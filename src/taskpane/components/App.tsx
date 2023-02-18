import * as React from "react";
import { DefaultButton } from "@fluentui/react";
import Header from "./Header";
import Progress from "./Progress";

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

  if (!isOfficeInitialized) {
    return (
      <Progress
        title={title}
        logo={require("./../../../assets/logo-filled.png")}
        message="Please sideload your addin to see app body."
      />
    );
  }

  return (
    <div className="ms-welcome">
      <Header logo={require("./../../../assets/logo-filled.png")} title={props.title} message="Welcome" />
      <p>{JSON.stringify(state?.dictionary)}</p>
      <p className="ms-font-l">
        Modify the source files, then click <b>Run</b>.
      </p>
      <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={this.click}>
        Run
      </DefaultButton>
    </div>
  );
};

export default class App extends React.Component<AppProps, AppState> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      paragraphs: [],
      dictionary: [],
    };
  }

  click = async () => {
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

      /*const paragraphs = [];
      let paragraphCursor = context.document.body.paragraphs.getFirst();

      try {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          paragraphCursor.load("text");
          await context.sync();
          paragraphs.push(paragraphCursor.text);
          paragraphCursor = paragraphCursor.getNext();
        }
        // eslint-disable-next-line no-empty
      } catch (err) {}*/

      /*paragraphCursor.load("isNullObject");
      await context.sync();
      while (!paragraphCursor.isNullObject) {
        paragraphCursor.load("text");
        await context.sync();
        paragraphs.push(paragraphCursor.text);
        paragraphCursor = paragraphCursor.getNextOrNullObject();
      }*/

      const dictionary = paragraphsTexts
        .filter((p) => p[0] === "“")
        .map((p) => {
          const termEndIndex = p.indexOf("”");
          const term = p.substr(1, termEndIndex - 1);
          const definition = p.substr(termEndIndex + 2);
          return { term, definition };
        });

      this.setState({ paragraphs: paragraphsTexts, dictionary });
    });
  };

  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo={require("./../../../assets/logo-filled.png")}
          message="Please sideload your addin to see app body."
        />
      );
    }

    return (
      <div className="ms-welcome">
        <Header logo={require("./../../../assets/logo-filled.png")} title={this.props.title} message="Welcome" />
        <p>{JSON.stringify(this.state?.dictionary)}</p>
        <p className="ms-font-l">
          Modify the source files, then click <b>Run</b>.
        </p>
        <DefaultButton className="ms-welcome__action" iconProps={{ iconName: "ChevronRight" }} onClick={this.click}>
          Run
        </DefaultButton>
      </div>
    );
  }
}
