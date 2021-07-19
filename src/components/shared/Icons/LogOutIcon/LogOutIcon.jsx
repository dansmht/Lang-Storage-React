import React from 'react';
import PropTypes from 'prop-types';

import classes from './LogOutIcon.module.scss';

const LogOutIcon = ({ isActive }) => {
  return (
    <span className={classes.LogOutIcon}>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 512'>
        <g style={{ opacity: isActive ? 1 : 0 }}>
          <path className={classes.a}
            d='M346,15V437a14.85,14.85,0,0,1-15,15H211a14.85,14.85,0,0,1-15-15L16,15A14.85,14.85,0,0,1,31,0H331A14.85,14.85,0,0,1,346,15Z'
            transform='translate(-16)' />
          <path className={classes.b}
            d='M346,15V437a14.85,14.85,0,0,1-15,15H211a14.85,14.85,0,0,1-15-15L151,332V0H331A14.85,14.85,0,0,1,346,15Z'
            transform='translate(-16)' />
          <path className={classes.c}
            d='M217.6,91.51l-180-90c-4.5-2.1-10.2-2.1-14.4.6A15.61,15.61,0,0,0,16,15V437A14.58,14.58,0,0,0,26.2,451.1L151,492.81l55.2,18.29a14.8,14.8,0,0,0,13.5-1.79A15.64,15.64,0,0,0,226,497V105A15.36,15.36,0,0,0,217.6,91.51Z'
            transform='translate(-16)' />
          <path className={classes.d}
            d='M226,105V497a15.64,15.64,0,0,1-6.3,12.3,14.77,14.77,0,0,1-13.5,1.79L151,492.81V58.21l66.6,33.3A15.36,15.36,0,0,1,226,105Z'
            transform='translate(-16)' />
          <path className={classes.d}
            d='M383.93,330.23A15,15,0,0,1,376,317V302H271a15,15,0,0,1-15-15V227a15,15,0,0,1,15-15H376V197a15,15,0,0,1,23.32-12.48l90,60a15,15,0,0,1,0,25l-90,60A15,15,0,0,1,383.93,330.23Z'
            transform='translate(-16)' />
          <path className={classes.e} d='M166,227v60a15,15,0,0,1-30,0V227a15,15,0,0,1,30,0Z' transform='translate(-16)' />
          <path className={classes.f} d='M166,227v60a14.85,14.85,0,0,1-15,15V212A14.85,14.85,0,0,1,166,227Z'
            transform='translate(-16)' />
        </g>
        <g style={{ opacity: isActive ? 0 : 1 }}>
          <path
            d='M489.32,244.53l-90-60A15,15,0,0,0,376,197v15H346V15A14.85,14.85,0,0,0,331,0H31a15.09,15.09,0,0,0-8.11,2.32A15.67,15.67,0,0,0,16,13.94c0,.35,0,.71,0,1.07V437a14.58,14.58,0,0,0,10.2,14.09L151,492.82l55.2,18.29a14.8,14.8,0,0,0,13.5-1.79A15.64,15.64,0,0,0,226,497V452H331a14.85,14.85,0,0,0,15-15V302h30v15a15,15,0,0,0,23.32,12.47l90-60a15,15,0,0,0,0-25ZM211,477.25a14.7,14.7,0,0,1-5.4,11.29A12,12,0,0,1,194,490.19l-47.32-16.8-107-38.28C34.6,433.46,31,428.23,31,422.17V34.78a14.17,14.17,0,0,1,.9-5,14.81,14.81,0,0,1,5.27-6.87,12.34,12.34,0,0,1,12.34-.55L203.8,105a14.23,14.23,0,0,1,7.2,12.39Zm120-52.84c0,7.9-6,14.11-13.64,14.11H226V105a15.36,15.36,0,0,0-8.4-13.5l-156-78H317.36A13.74,13.74,0,0,1,331,27.61V212H271a15,15,0,0,0-15,15v60a15,15,0,0,0,15,15h60ZM483.16,267l-78.75,48a14.2,14.2,0,0,1-13.47.6c-.28-.14-.56-.28-.82-.44A11.81,11.81,0,0,1,384,305V293H278.12c-7.25,0-13.12-5.37-13.12-12V233c0-6.64,5.87-12,13.12-12H384V209a11.79,11.79,0,0,1,6.12-10.14c.26-.16.54-.3.82-.44a14.27,14.27,0,0,1,13.47.6l78.75,48a11.46,11.46,0,0,1,0,20Z'
            transform='translate(-16)' />
          <path
            d='M151,212a14.85,14.85,0,0,0-15,15v60A14.86,14.86,0,0,0,143.32,300,15.12,15.12,0,0,0,151,302a14.85,14.85,0,0,0,15-15V227A14.85,14.85,0,0,0,151,212Zm7.5,68.33c0,6.53-3.3,11.67-7.5,11.67s-7.5-5.14-7.5-11.67V233.67c0-6.53,3.3-11.66,7.5-11.66s7.5,5.13,7.5,11.66Z'
            transform='translate(-16)' />
        </g>
      </svg>

    </span>
  );
};

LogOutIcon.propTypes = {
  isActive: PropTypes.bool,
};

export default LogOutIcon;