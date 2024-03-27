import { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export const LoadingComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="animation-div">
      {isLoading ? <AiOutlineLoading className="loader rotating" /> : null}
    </div>
  );
};
