import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import classes from './Dropdown.module.scss';

const Dropdown = ({ children, close }) => {

  useEffect(() => {
    const handleClickListener = (event) => {
      console.log('EVENT.path', event.path);
      close();
    };

    console.log('Dropdown addEventListener');
    document.addEventListener('click', handleClickListener);

    return () => {
      console.log('Dropdown removeEventListener');
      document.removeEventListener('click', handleClickListener);
    };
  }, []);

  return (
    <div className={classes.Dropdown}>
      { children }
    </div>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  close: PropTypes.func.isRequired,
};

export default Dropdown;
