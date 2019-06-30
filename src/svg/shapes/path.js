import React from "react";
import { SVG } from "..";

export const Path = ({
  width,
  height,
  fill = undefined,
  stroke = undefined,
  strokeWidth = 0,
  d
}) => {
  return (
    <SVG width={width} height={height}>
      <path
        d={d}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="miter"
        strokeLinecap="square"
        strokeMiterlimit="3"
      />
    </SVG>
  );
};
