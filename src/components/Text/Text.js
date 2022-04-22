import React from "react";
import PropTypes from 'prop-types'

const Text = ({ text }) => {
  return (
    <div data-testid="text">
      <h3>{text}</h3>
    </div>
  );
};

Text.defaultProps = {
  text: "Hey world",
};

Text.propTypes = {
  text: PropTypes.string,
};

export default Text;
