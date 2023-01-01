import React, { useState } from "react";

import { useSpring, animated } from "@react-spring/web";
import "./progressbar.css";

function Progressbar({ score, duration, bgcolor1, bgcolor2 }) {
  const percentage = score;
  const [isMax, SetIsMax] = useState(false);
  const props = useSpring({
    width: isMax ? `${percentage}%` : "0",
    backgroundColor: isMax ? bgcolor1 : bgcolor2,
    config: { duration: duration },
  });

  const percentageProps = useSpring({
    number: isMax ? percentage : 0,
    config: { duration: duration },
  });
  return (
    <div className="container">
      <h3 className="skill">Javascript</h3>
      <div className="bar-frame" onClick={() => SetIsMax(!isMax)}>
        <animated.div className="bar-fill" style={{ ...props }} />
        <animated.div className="indicator" style={percentageProps}>
          {percentageProps.number.to((value) => `${Math.floor(value)}%`)}
        </animated.div>
      </div>
    </div>
  );
}

export default Progressbar;
