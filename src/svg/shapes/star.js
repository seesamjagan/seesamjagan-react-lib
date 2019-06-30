import React from "react";
import { Path } from "./path";
import { getX, getY } from "../../math";

export const Star = ({
  width,
  height,
  fill = undefined,
  stroke = undefined,
  strokeWidth = 1,
  tails = 5,
  rotation = 0
}) => {
  let [xr, yr] = [width * 0.5, height * 0.5];
  let [cx, cy] = [xr, yr];
  let [angleInc] = [360 / tails];

  let points = [];

  for (let angle = rotation - 90, i = 0; i < tails*2; angle += angleInc, i++) {
    let [xri, yri] = [i%2===0?xr:xr*0.75, i%2===0?yr:yr*0.75]
    points.push(`${getX(xri, angle, cx)} ${getY(yri, angle, cy)}`);
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
