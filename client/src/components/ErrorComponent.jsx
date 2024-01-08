import PropTypes from "prop-types";

export const ErrorMessage = ({ message }) => {
  return <div className="error-message">{message}</div>;
};
ErrorMessage.PropTypes = {
  message: PropTypes.string.isRequired,
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};
