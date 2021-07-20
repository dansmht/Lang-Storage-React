import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import classes from './RightDarkModeIcon.module.scss';

const RightDarkModeIcon = ({ isActive }) => {
  const darkMode = useSelector((state) => state.settings.darkMode);

  return (
    <span className={classNames(classes.RightDarkModeIcon, {
      [`${classes.Active}`]: isActive,
      [`${classes.DarkMode}`]: darkMode,
    })}>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <g>
          <g>
            <circle className={classes.a} cx='256' cy='256' r='241.37' />
            <path className={classes.b} d='M318.53,232a72.53,72.53,0,1,1-125.45.73L168.9,176.6a126.76,126.76,0,1,0,172.37-1.68Z' />
            <rect className={classes.b} x='233.38' y='144.82' width='45.23' height='100.94' />
          </g>
          <g>
            <path
              d='M256,512C114.84,512,0,397.16,0,256S114.84,0,256,0,512,114.84,512,256,397.16,512,256,512Zm0-482.74C131,29.26,29.26,131,29.26,256S131,482.74,256,482.74,482.74,381,482.74,256,381,29.26,256,29.26Z' />
            <path d='M245.76,95.5a14.63,14.63,0,0,1-14.63-14.62v0A14.63,14.63,0,1,1,245.76,95.5Z' />
            <path
              d='M79.4,263.88a14.63,14.63,0,0,1-14.63-14.63,181.49,181.49,0,0,1,36.29-109.4,184.57,184.57,0,0,1,92.06-65.31,14.63,14.63,0,0,1,8.73,27.93A153.09,153.09,0,0,0,94,249.26,14.63,14.63,0,0,1,79.4,263.88Z' />
            <path
              d='M256.2,410.19A141.43,141.43,0,0,1,158.86,166a14.63,14.63,0,0,1,23.48,4.85L206.52,227a14.62,14.62,0,0,1-.73,13,57.87,57.87,0,1,0,103.4,5.87,60.19,60.19,0,0,0-3.27-6.46,14.6,14.6,0,0,1-1-12.81l22.74-57.11a14.63,14.63,0,0,1,23.42-5.42,141.42,141.42,0,0,1-94.9,246.1ZM164.64,203.7a112.16,112.16,0,0,0,135.7,168.09A112.29,112.29,0,0,0,346.2,202.07l-11.58,29.09c.5,1.05,1,2.1,1.43,3.15a87.16,87.16,0,1,1-159.13-2.1Z' />
            <path
              d='M278.61,260.39H233.39a14.63,14.63,0,0,1-14.63-14.63V144.82a14.63,14.63,0,0,1,14.63-14.63h45.22a14.63,14.63,0,0,1,14.63,14.63V245.76A14.63,14.63,0,0,1,278.61,260.39ZM248,231.13h16V159.45H248v71.68Z' />
          </g>
        </g>
      </svg>

    </span>
  );
};

RightDarkModeIcon.propTypes = {
  isActive: PropTypes.bool,
};

export default RightDarkModeIcon;
