import React from 'react';
import PropTypes from 'prop-types';

import classes from './BackArrowIcon.module.scss';
import classNames from 'classnames';

const BackArrowIcon = ({ isActive }) => {
  return (
    <span className={classNames(classes.BackArrowIcon, {
      [`${classes.Active}`]: isActive,
    })}>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 248'>
        <path className={classes.a} d='M492,236H68.44l70.17-69.82a20,20,0,0,0-28.22-28.36L5.88,241.82a0,0,0,0,1,0,0,20,20,0,0,0,0,28.32l0,0,104.51,104a20,20,0,0,0,28.21-28.36L68.44,276H492a20,20,0,0,0,0-40Z' transform='translate(0 -132)' />
      </svg>

    </span>
  );
};

BackArrowIcon.propTypes = {
  isActive: PropTypes.bool,
};

export default BackArrowIcon;
