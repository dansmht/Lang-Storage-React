import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './CustomButton.module.scss';

const CustomButton = ({ label, className, blue, gray, orange, ...props }) => {
  return (
    <button
      className={classNames(classes.CustomButton, className, {
        [`${classes.blue}`]: blue,
        [`${classes.gray}`]: gray,
        [`${classes.orange}`]: orange,
      })}
      {...props}
    >
      { label }
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  blue: PropTypes.bool,
  gray: PropTypes.bool,
  orange: PropTypes.bool,
};

export default CustomButton;
