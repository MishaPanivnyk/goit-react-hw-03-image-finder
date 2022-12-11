import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className="message">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
