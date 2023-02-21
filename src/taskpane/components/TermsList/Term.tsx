import React, { useState } from "react";
import { ChevronDown20Filled, ChevronUp20Filled } from "@fluentui/react-icons";
import cn from "classnames";

interface TermProps {
  term: string;
  definition: string;
  onToggleExpand: () => void;
}

export default function Term({ term, definition, onToggleExpand }: TermProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
    onToggleExpand();
  };

  const ChevronIcon = isOpen ? ChevronUp20Filled : ChevronDown20Filled;

  return (
    <div className="mt-6">
      <div className="flex flex-row justify-between items-center">
        <div className="capitalize text-lg font-extralight">{term}</div>
        <ChevronIcon className="cursor-pointer mt-1" onClick={toggleIsOpen} />
      </div>
      <div
        style={{ borderColor: "#189450" }}
        className="mt-2 p-2 border-2 border-solid rounded-md cursor-pointer"
        onClick={toggleIsOpen}
      >
        <div className={cn("capitalize text-justify", { ["max-lines"]: !isOpen })}>{definition}</div>
      </div>
    </div>
  );
}
