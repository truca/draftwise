import * as React from "react";
import { DocumentText20Filled, Textbox20Filled } from "@fluentui/react-icons";
import Tooltip from "./Tooltip";

export interface HeaderProps {
  title: string;
  logo: string;
  message: string;
}

export default class Header extends React.Component<HeaderProps> {
  render() {
    const { title, logo, message } = this.props;

    return (
      <section className="w-full px-4 py-2 border-b border-solid border-b-neutral-300 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <img className="mr-2" width="50" src={logo} alt={title} title={title} />
          <h1 className="text-lg dw-dark-green-color font-semibold tracking-wide">{message}</h1>
        </div>
        <div className="flex flex-row items-center pr-8">
          <div className="mr-4">
            <Tooltip content="Document Terms">
              <DocumentText20Filled filled className="h-8 cursor-pointer" />
            </Tooltip>
          </div>
          <Tooltip content="Paragraph Terms">
            <Textbox20Filled filled className="h-8 cursor-pointer" />
          </Tooltip>
        </div>
      </section>
    );
  }
}
