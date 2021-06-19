import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './CustomInput.module.scss';

const CustomInput = ({ type, name, registerName, label, errors, isDirty, register, validateOptions, ...props }) => (
  <div className={classNames(classes.CustomInput, { [`${classes.flex}`]: !label })}>
    {
      label
        ? (
          <label>
            <span>{ label }</span>
            <Input {...{ type, name, registerName, errors, isDirty, register, validateOptions, ...props }} />
          </label>
        )
        : <Input {...{ type, name, registerName, errors, isDirty, register, validateOptions, ...props }} />
    }
  </div>
);

const Input = ({ type, name, registerName, errors, isDirty, register, validateOptions, ...props }) => (
  <input
    {...register(registerName ?? name, validateOptions)}
    type={type}
    name={name}
    className={classNames({
      [`${classes.invalid}`]: errors,
      [`${classes.valid}`]: !errors && isDirty,
    })}
    {...props}
  />
);

CustomInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  registerName: PropTypes.string,
  label: PropTypes.string,
  errors: PropTypes.object,
  isDirty: PropTypes.bool,
  register: PropTypes.func.isRequired,
  validateOptions: PropTypes.object,
};

CustomInput.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  registerName: PropTypes.string,
  errors: PropTypes.object,
  isDirty: PropTypes.bool,
  register: PropTypes.func.isRequired,
  validateOptions: PropTypes.object,
};

export default CustomInput;
