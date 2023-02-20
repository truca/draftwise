import * as React from "react";
import { DocumentText20Filled, Textbox20Filled } from "@fluentui/react-icons";
import cn from "classnames";
import Tooltip from "./Tooltip";
import { useSelector } from "react-redux";
import { routeSelector } from "../reducers/routes/selectors";
import { RouteActionTypes, Routes } from "../reducers/routes";
import { useDispatch } from "react-redux";

export interface HeaderProps {
  title: string;
  logo: string;
  message: string;
}

const Header = (props: HeaderProps) => {
  const { title, logo, message } = props;
  const route = useSelector(routeSelector);
  const dispatch = useDispatch();

  const changeRoute = (route: Routes) => {
    dispatch({ type: RouteActionTypes.CHANGE_ROUTE, route });
  };

  return (
    <section className="w-full px-4 py-2 border-b border-solid border-b-neutral-300 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <img className="mr-2" width="50" src={logo} alt={title} title={title} />
        <h1 className="text-lg dw-dark-green-color font-semibold tracking-wide">{message}</h1>
      </div>
      <div className="flex flex-row items-center pr-8">
        <div className="mr-4">
          <Tooltip content="Document Terms">
            <div
              onClick={() => changeRoute(Routes.DOCUMENT)}
              className={cn("border-b-2 border-solid", {
                ["border-black"]: route === Routes.DOCUMENT,
              })}
            >
              <DocumentText20Filled filled className="h-8 cursor-pointer" />
            </div>
          </Tooltip>
        </div>
        <Tooltip content="Paragraph Terms">
          <div
            onClick={() => changeRoute(Routes.PARAGRAPH)}
            className={cn("border-b-2 border-solid", {
              ["border-black"]: route === Routes.PARAGRAPH,
            })}
          >
            <Textbox20Filled filled className="h-8 cursor-pointer" />
          </div>
        </Tooltip>
      </div>
    </section>
  );
};

export default Header;
