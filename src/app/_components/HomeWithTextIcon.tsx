"use client"

import * as React from "react"; 
import { useEffect, useState } from "react";

export function HomeWithTextIcon({ height = 24, strokeColour = "white" }) {
  const [hoverOn, setHover] = useState(false);

  return (
    <svg
      viewBox={hoverOn ? "0 0 68 24" : "0 0 24 24"}
      xmlns="http://www.w3.org/2000/svg"
      width={hoverOn ? "68" : "24"}
      height={height}
      overflow="hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <g stroke={hoverOn ? "#D9F99D" : strokeColour} fill="none">
        <path d={hoverOn ? "M1 1 67 1 67 23 1 23Z" : "M1 1 23 1 23 23 1 23Z"} fillRule="evenodd" />
        <path fill={hoverOn ? "#D9F99D" : strokeColour} strokeWidth="0.3" d="M5.3024 12.8025 5.3024 19.495 18.6976 19.5 18.6976 12.7938 19.8069 13.7703 21.25 12.4274 12 4.25 2.75 12.4273 4.1987 13.7752ZM18.251 19.0845 5.749 19.0797 5.749 12.4089 12 6.8998 18.251 12.4009ZM4.2069 13.1956 3.3898 12.4359 12 4.8226 20.6102 12.4359 19.7982 13.1906 12 6.3276Z" fillRule="evenodd" />
        <path strokeWidth="0.3" d="M14.0066 19.0728 14.0066 12.25 9.9934 12.25 9.9934 19.0728 8.5 19.0728 8.5 19.25 9.9211 19.25 9.9211 12.4272 14.0789 12.4272 14.0789 19.25 15.5 19.25 15.5 19.0728Z" fillRule="evenodd" />
        <path strokeWidth="0.3" d="M10.25 19.25 13 18.8687 13 13.1313 10.25 12.75 10.25 19.25ZM10.4274 12.9539 12.8226 13.2821 12.8226 18.7179 10.4274 19.0461 10.4274 12.9539Z" fillRule="evenodd" />
      </g>
      {hoverOn && (
        <text x={height * 2} y={height - height / 4} fill={hoverOn ? "#D9F99D" : strokeColour} fontSize="12" textAnchor="middle">
          Home
        </text>
      )}
    </svg>
  );
};
export default HomeWithTextIcon