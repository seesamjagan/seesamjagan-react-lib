import React, { Component } from "react";
import { render } from "react-dom";

import { Rect, Circle } from "../../src/svg";
import { Path } from "../../src/svg/shapes/path";
import { Star } from "../../src/svg/shapes/star";
import { Polygon } from "../../src/svg/shapes/polygon";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>seesamjagan-react-lib Demo</h1>
        <Rect width={100} height={100} fill="#369" stroke="#135" />
        <Circle width={100} height={100} fill="#369" strokeWidth={1} />
        <Path
          width={100}
          height={100}
          strokeWidth={2}
          d="M 0 100 L 10 60 20 80 40 20 60 50 90 10 100 8"
        />
        <Polygon width={100} height={100} sides={5} rotation={-0} fill="#369" />
        <Star width={100} height={100} tails={8} rotation={-0} fill="#369" />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
