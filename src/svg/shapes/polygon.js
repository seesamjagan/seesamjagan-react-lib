import React from "react";
import { Path } from "./path";
import { getX, getY } from "../../math";

export const Polygon = ({
  width,
  height,
  fill = undefined,
  stroke = undefined,
  strokeWidth = 1,
  sides = 5,
  rotation = 0
}) => {
  let [xr, yr] = [width * 0.5, height * 0.5];
  let [cx, cy] = [xr, yr];
  let [angleInc] = [360 / sides];

  let points = [];

  for (let angle = rotation - 90, i = 0; i < sides; angle += angleInc, i++) {
    points.push(`${getX(xr, angle, cx)} ${getY(yr, angle, cy)}`);
  }

  let d = `M ${points[0]} L ${points.join(" ")} Z`;

  return (
    <React.Fragment>
      <Path
        width={width}
        height={height}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d={d}
      />
    </React.Fragment>
  );
};
