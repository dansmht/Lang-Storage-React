import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

    document.addEventListener('click', handleClickListener);

    return () => {
      document.removeEventListener('click', handleClickListener);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={classNames(classes.Dropdown, className)}
    >
      { children }
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Dropdown;
