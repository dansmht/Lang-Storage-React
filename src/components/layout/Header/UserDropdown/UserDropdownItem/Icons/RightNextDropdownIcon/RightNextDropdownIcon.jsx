import React from 'react';
import PropTypes from 'prop-types';

import classes from './RightNextDropdownIcon.module.scss';
import classNames from 'classnames';

const RightNextDropdownIcon = ({ isActive }) => {
  return (
    <span className={classNames(classes.RightNextDropdownIcon, {
      [`${classes.Active}`]: isActive,
    })}>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 276.51 512'>
        <path d='M137.59,512a19,19,0,0,1-13.89-5.95c-7.94-7.94-7.94-20.51,0-27.79L346.62,256,123.7,33.74c-7.94-7.94-7.94-20.51,0-27.79C131.64-2,144.21-2,151.48,6L388.3,242.11A19,19,0,0,1,394.25,256c0,5.29-2,10.58-5.95,13.89L151.48,506.05A19,19,0,0,1,137.59,512Z' transform='translate(-117.75)' />
      </svg>

    </span>
  );
};

RightNextDropdownIcon.propTypes = {
  isActive: PropTypes.bool,
};

export default RightNextDropdownIcon;
