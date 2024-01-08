import PropTypes from "prop-types";

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  bio: PropTypes.string,
  avatar: PropTypes.string,
});

export const UpdateUserPropTypes = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
});

export const plantItemPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  category: PropTypes.string.isRequired,
  isFav: PropTypes.bool,
  userId: PropTypes.number.isRequired,
});

export const deletePlantPropTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  plantId: PropTypes.number.isRequired,
});
