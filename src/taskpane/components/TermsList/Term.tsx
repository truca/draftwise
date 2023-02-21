import React, { useState } from "react";
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

  return (
    <div className="mt-6">
      <div className="capitalize text-lg font-extralight">{term}</div>
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
