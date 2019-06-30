import React from "react";
import { SVG } from "..";

export const Rect = ({
  width,
  height,
  fill = undefined,
  stroke = undefined,
  strokeWidth=1
}) => {
  return (
    <SVG width={width} height={height}>
      <rect
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </SVG>
  );
};
