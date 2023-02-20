import React, { useState } from "react";
import cn from "classnames";

interface TermProps {
  term: string;
  definition: string;
}

export default function Term({ term, definition }: TermProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6">
      <div className="capitalize text-lg font-extralight">{term}</div>
      <div
        className="mt-2 p-2 border border-solid rounded-md cursor-pointer"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <div className={cn("capitalize text-justify", { ["max-lines"]: !isOpen })}>{definition}</div>
      </div>
    </div>
  );
}
