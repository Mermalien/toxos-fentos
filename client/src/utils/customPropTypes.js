import PropTypes from "prop-types";

export const userPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  bio: PropTypes.string,
  avatar: PropTypes.string,
});

export const updateUserPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.optional,
  email: PropTypes.string,
  password: PropTypes.string,
  bio: PropTypes.string,
  avatar: PropTypes.string,
});

export const deleteUserPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
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

export const updatePlantPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.optional,
  description: PropTypes.string.optional,
  image: PropTypes.string,
  category: PropTypes.string.optional,
  isFav: PropTypes.bool,
  userId: PropTypes.number.isRequired,
});

export const deletePlantPropTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  plantId: PropTypes.number.isRequired,
});

export const commentItemPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  plantId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
});
