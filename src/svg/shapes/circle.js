import React from 'react';
import { SVG } from "..";

export const Circle = ({
    width,
    height,
    x=0,
    y=0,
    fill = undefined,
    stroke = undefined,
    strokeWidth=0
  }) => {
    return (
      <SVG width={width} height={height} x={x} y={y}>
        <ellipse
          width={width}
          height={height}
          fill={fill}
          stroke={stroke}
          strokeWidth={strokeWidth}
          cx={width/2} cy={height/2}
          rx={(width-strokeWidth)/2} ry={(height-strokeWidth)/2}
        />
      </SVG>
    );
  };
  