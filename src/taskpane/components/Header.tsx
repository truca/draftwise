import * as React from "react";
import { DocumentText20Filled, Textbox20Filled } from "@fluentui/react-icons";

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
        <div className="flex flex-row items-center pr-4">
          <DocumentText20Filled filled className="h-8 mr-4 cursor-pointer" />
          <Textbox20Filled filled className="h-8 cursor-pointer" />
        </div>
      </section>
    );
  }
}
