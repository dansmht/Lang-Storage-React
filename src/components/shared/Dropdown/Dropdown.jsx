import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ESC_CODE } from '../../../utils/constants';

import classes from './Dropdown.module.scss';

const Dropdown = ({ children, close, className, ...props }) => {

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickListener = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());

      if (!path.includes(dropdownRef.current)) {
        close();
      }
    };

    const handleKeyDownListener = (event) => {
      if (event.code === ESC_CODE) {
        close();
      }
    };

    document.addEventListener('click', handleClickListener);

    document.addEventListener('keydown', handleKeyDownListener);

    return () => {
      document.removeEventListener('click', handleClickListener);

      document.removeEventListener('keydown', handleKeyDownListener);
    };
  }, []);

  return (
    <ul
      ref={dropdownRef}
      className={classNames(classes.Dropdown, className)}
      {...props}
    >
      { children }
    </ul>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Dropdown;
