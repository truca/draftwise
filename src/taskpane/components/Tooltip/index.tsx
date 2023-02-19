import React, { useState } from "react";
import { TooltipTip, TooltipWrapper } from "./components";

interface TooltipProps {
  children: any;
  content: string;
  delay?: number;
}

const Tooltip = (props: TooltipProps) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    // eslint-disable-next-line no-undef
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    // eslint-disable-next-line no-undef
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {/* Wrapping */}
      {props.children}
      {active && <TooltipTip>{props.content}</TooltipTip>}
    </TooltipWrapper>
  );
};

export default Tooltip;
