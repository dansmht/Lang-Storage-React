import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './RightLinkIcon.module.scss';

const RightLinkIcon = ({ isActive }) => {
  return (
    <span className={classNames(classes.RightLinkIcon, {
      [`${classes.Active}`]: isActive,
    })}>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 511.58 405'>
        <path className={classes.a}
          d='M500.33,216.32,272.2,60.78A10.36,10.36,0,0,0,256,69.35v93.53C96.53,169.47,9.22,327.29,7.15,442.12v.52A10.37,10.37,0,0,0,17.52,453h0a10.37,10.37,0,0,0,10.37-10.2v-.61c1.16-27.85,110.16-148,228.12-154.79v93A10.37,10.37,0,0,0,272.2,389L500.33,233.45A10.37,10.37,0,0,0,503.05,219,10.5,10.5,0,0,0,500.33,216.32Z'
          transform='translate(-0.34 -52.18)' />
      </svg>

    </span>
  );
};

RightLinkIcon.propTypes = {
  isActive: PropTypes.bool,
};

export default RightLinkIcon;
