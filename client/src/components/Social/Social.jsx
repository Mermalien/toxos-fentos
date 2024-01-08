import "./Social.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="social-media">
      <div className="social-links">
        <a href="https://github.com/Mermalien" target="_blank" rel="noreferrer">
          <FaGithub style={{ width: "25", height: "25", fill: "#27ad6a" }} />
        </a>
        <a
          href="https://www.linkedin.com/in/andrea-guisande-nieto"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn
            style={{ width: "25", height: "25", fill: "#27ad6a" }}
          />
        </a>
      </div>
    </div>
  );
};
