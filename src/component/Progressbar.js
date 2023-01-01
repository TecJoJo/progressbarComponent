import React, { useState } from "react";

import { useSpring, animated } from "@react-spring/web";
import "./progressbar.css";

function Progressbar() {
  const percentage = 70;
  const [isMax, SetIsMax] = useState(false);
  const props = useSpring({
    width: isMax ? `${percentage}%` : "0",
  });

  const percentageProps = useSpring({ number: isMax ? percentage : 0 });
  return (
    <div className="container">
      <h4 className="skill">Javascript</h4>
      <div className="bar-frame" onClick={() => SetIsMax(!isMax)}>
        <animated.div className="bar-fill" style={props} />
        <animated.div className="indicator" style={percentageProps}>
          {percentageProps.number.to((value) => `${Math.floor(value)}%`)}
        </animated.div>
      </div>
    </div>
  );
}

export default Progressbar;
