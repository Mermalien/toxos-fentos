import { useEffect, useState } from "react";
import "./Loading.css";
import { useSpring, animated } from "react-spring";

export const LoadingComponent = () => {
  const [falling, setFalling] = useState(false);

  const treeAnimation = useSpring({
    opacity: falling ? 0 : 1,
    transform: falling ? "translateY(100px)" : "translateY(0)",
    onRest: () => setFalling(false),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFalling(true);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="tree-container">
      <div className="tree">
        <div className="trunk">
          <animated.div style={treeAnimation} className="leaf"></animated.div>
        </div>
      </div>
    </div>
  );
};
