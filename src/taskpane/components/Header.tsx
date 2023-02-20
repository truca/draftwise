import * as React from "react";
import { DocumentText20Filled, Textbox20Filled } from "@fluentui/react-icons";
import Tooltip from "./Tooltip";
import { useSelector } from "react-redux";
import { routeSelector } from "../reducers/routes/selectors";
import { RouteActionTypes, Routes } from "../reducers/routes";
import { useDispatch } from "react-redux";

interface LinkProps {
  icon: any;
  route: Routes;
  tooltipMessage: string;
  changeRoute: (route: Routes) => void;
}

const Link = ({ icon, route, changeRoute, tooltipMessage }: LinkProps) => {
  const currentRoute = useSelector(routeSelector);
  const isActive = currentRoute === route;

  return (
    <Tooltip content={tooltipMessage}>
      <div
        onClick={() => changeRoute(route)}
        style={isActive ? { borderBottomColor: "#189450" } : {}}
        className="border-b-2 border-solid"
      >
        {icon}
      </div>
    </Tooltip>
  );
};

export interface HeaderProps {
  title: string;
  logo: string;
  message: string;
}

const Header = (props: HeaderProps) => {
  const { title, logo, message } = props;
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
          <Link
            tooltipMessage="Document Terms"
            icon={<DocumentText20Filled filled className="h-8 cursor-pointer" />}
            route={Routes.DOCUMENT}
            changeRoute={changeRoute}
          />
        </div>
        <Link
          tooltipMessage="Paragraph Terms"
          icon={<Textbox20Filled filled className="h-8 cursor-pointer" />}
          route={Routes.PARAGRAPH}
          changeRoute={changeRoute}
        />
      </div>
    </section>
  );
};

export default Header;
