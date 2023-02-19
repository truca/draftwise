import React from "react";

interface TermProps {
  term: string;
  definition: string;
}

export default function Term({ term, definition }: TermProps) {
  return (
    <div>
      <div className="text-3xl font-bold underline">{term}</div>
      <div>{definition}</div>
    </div>
  );
}
