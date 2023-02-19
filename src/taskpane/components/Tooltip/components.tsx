import React from "react";
import cn from "classnames";

interface TooltipWrapperProps {
  children: any;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export const TooltipWrapper = ({ children, ...otherProps }: TooltipWrapperProps) => {
  return (
    <div className="inline-block relative" {...otherProps}>
      {children}
    </div>
  );
};

interface TooltipTipProps {
  children: any;
}

export const TooltipTip = ({ children }: TooltipTipProps) => {
  return (
    <div
      style={{ transform: "translateX(-50%)", bottom: -30 }}
      className={cn(
        "leading-none font-sans bg-black text-white text-sm whitespace-nowrap absolute rounded left-1/2 p-1.5 z-50"
      )}
    >
      {children}
    </div>
  );
};
