import React from 'react';
import PropTypes from 'prop-types';

import classes from './CustomRadioButton.module.scss';

const CustomRadioButton = ({ name, title, value, register, ...props }) => {
  return (
    <label className={classes.CustomRadioButton}>
      <input type='radio' value={value} {...register(name)} {...props} />
      <span>{ title }</span>
    </label>
  );
};

CustomRadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CustomRadioButton;
