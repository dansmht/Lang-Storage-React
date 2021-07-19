import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ESC_KEY } from '../../../utils/constants';

import classes from './Dropdown.module.scss';

const Dropdown = ({ children, close, className }) => {

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickListener = (event) => {
      const path = event.path || (event.composedPath && event.composedPath());

      if (!path.includes(dropdownRef.current)) {
        close();
      }
    };

    const handleKeyDownListener = (event) => {
      if (event.keyCode === ESC_KEY) {
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
