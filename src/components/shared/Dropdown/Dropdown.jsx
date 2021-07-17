import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import classes from './Dropdown.module.scss';

const Dropdown = ({ children, close }) => {

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
    <div className={classes.Dropdown} ref={dropdownRef}>
      { children }
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default Dropdown;
