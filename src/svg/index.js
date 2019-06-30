import React from "react";

export const SVG = ({ width, height, children, x=0, y=0 }) => (
  <svg
    /* xmlSpace="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink" */
    viewBox={`0 0 ${width} ${height}`}
    x={x}
    y={y}
    width={width}
    height={height}
    fill="rgba(0,0,0,0)"
    stroke="#000"
  >
    {children}
  </svg>
);

export * from "./shapes/rect";
export * from "./shapes/circle";
export * from "./shapes/path";
