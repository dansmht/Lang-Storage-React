import React from 'react';
import PropTypes from 'prop-types';

import classes from './DonationsIcon.module.scss';

const DonationsIcon = ({ isActive }) => {
  return (
    <span className={classes.DonationsIcon}>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <g style={{ opacity: isActive ? 1 : 0 }}>
          <path className={classes.a}
            d='M256,0C397.39,0,512,114.61,512,256a254.88,254.88,0,0,1-53.16,156.19c-1.55,2-13.34,2.21-14.95,4.17-22.8,27.82-41.13,43.77-73.61,60-2.48,1.24-5,11.22-7.52,12.38A255,255,0,0,1,256,512C114.62,512,0,397.38,0,256A255,255,0,0,1,64.2,86.44c2-2.25,15.58.1,17.65-2.08,27.31-28.77,52.45-47.79,90.55-61.45,2.12-.75,1.48-9.47,3.61-10.17A255.83,255.83,0,0,1,256,0Z'
            transform='translate(0 0)' />
          <path className={classes.b} d='M271,79A177,177,0,1,1,94,256,177,177,0,0,1,271,79Z' transform='translate(0 0)' />
          <path className={classes.c}
            d='M162.08,238.67a5,5,0,0,1-5,5h-8.34V252a5,5,0,0,1-10,0v-8.33h-8.33a5,5,0,0,1,0-10h8.33v-8.34a5,5,0,0,1,10,0v8.34h8.34a5,5,0,0,1,5,5Z'
            transform='translate(0 0)' />
          <path className={classes.d}
            d='M118.79,306.13a5,5,0,0,1-5,5h-8.34v8.33a5,5,0,0,1-10,0v-8.33H87.12a5,5,0,0,1,0-10h8.33v-8.34a5,5,0,0,1,10,0v8.34h8.34A5,5,0,0,1,118.79,306.13Z'
            transform='translate(0 0)' />
          <path className={classes.e}
            d='M443.26,188.05c-5.74,11.27-16.8,22.27-24.27,22.9-.2,0-.42,0-.64,0s-.43,0-.64,0c-7.47-.63-18.52-11.63-24.26-22.9-6.38-12.53-3.77-20.65,3.52-22.69,6-1.69,13.33,1.29,19.3,9.45a2.65,2.65,0,0,0,4.17,0c6-8.16,13.28-11.14,19.3-9.45,7.29,2,9.9,10.16,3.52,22.69ZM74.74,204.36c-6-1.69-13.34,1.29-19.3,9.45a2.65,2.65,0,0,1-4.17,0c-6-8.16-13.29-11.14-19.3-9.45-7.29,2-9.9,10.16-3.52,22.69,5.74,11.27,16.79,22.27,24.26,22.9.21,0,.42,0,.64,0s.43,0,.64,0c7.47-.63,18.53-11.63,24.27-22.9C84.64,214.52,82,206.4,74.74,204.36Z'
            transform='translate(0 0)' />
          <path className={classes.f}
            d='M428.05,206.7c-3.2,2.45-6.36,4-9.06,4.25-.2,0-.42,0-.64,0s-.43,0-.64,0c-7.47-.63-18.52-11.63-24.26-22.9-6.38-12.53-3.77-20.65,3.52-22.69a5.84,5.84,0,0,1,.6-.15c0,4.07,1.38,9,4.31,14.78C408,192.1,419.36,204,428.05,206.7ZM36.87,219c-2.92-5.75-4.26-10.71-4.31-14.78a5.66,5.66,0,0,0-.59.15c-7.29,2-9.9,10.16-3.52,22.69,5.74,11.27,16.79,22.27,24.26,22.9.21,0,.42,0,.64,0s.43,0,.64,0c2.7-.23,5.85-1.8,9.06-4.25C54.36,243,43,231.1,36.87,219Z'
            transform='translate(0 0)' />
          <path className={classes.g}
            d='M319.29,118.07c-1.91,28.49-13.86,66.5-27.07,75.92-.67.66-1.39,1.33-2.17,2-12.5,10.93-35.18,20.66-41.35,13.6s6.51-28.23,19-39.15l.58-.5a172.52,172.52,0,0,1-5.11-30.2,66.47,66.47,0,0,1-19.11-6.64c-20.25-10.57-31.76-28.55-25.69-40.17s64.32-17.5,75.38-16.75c15.59,1,27.76,8.75,25.53,41.88Z'
            transform='translate(0 0)' />
          <path className={classes.h}
            d='M346.67,142.37c-6.6,27.78-24.65,63.29-39.25,70.4-.76.54-1.59,1.08-2.47,1.62-14.13,8.71-38.1,14.56-43,6.58S273,194.21,287.14,185.5l.66-.4a181.76,181.76,0,0,1,3.82-55.8C299.29,97,313.2,93.22,328.4,96.83c9.72,2.31,18.19,6.32,20.61,17.91,1.36,6.53.42,16-2.34,27.62Z'
            transform='translate(0 0)' />
          <path className={classes.i}
            d='M326.63,237.35c-13.28,26.07-38.86,51.53-56.14,53-.49,0-1,.06-1.49.06s-1,0-1.48-.06c-17.29-1.45-42.87-26.91-56.15-53-14.77-29-8.71-47.79,8.14-52.52,13.93-3.9,30.86,3,44.66,21.87a6.13,6.13,0,0,0,9.66,0c13.8-18.87,30.73-25.77,44.66-21.87,16.85,4.73,22.91,23.51,8.14,52.52Z'
            transform='translate(0 0)' />
          <path className={classes.j}
            d='M291.44,280.5c-7.42,5.66-14.73,9.3-21,9.83-.48,0-1,.06-1.48.06s-1,0-1.48-.06c-17.29-1.45-42.87-26.91-56.15-53-14.77-29-8.71-47.79,8.14-52.52.46-.13.92-.24,1.39-.35.1,9.43,3.2,20.92,10,34.21,14.27,28,40.47,55.44,60.57,61.81Z'
            transform='translate(0 0)' />
          <path className={classes.h}
            d='M347.49,125c-9.6,18.39-56.57,12.83-104.91-12.4q-6.2-3.24-12-6.67L214.84,136.1c13.35,39.81,17.36,93,9.6,110.32a12.49,12.49,0,0,1-3.06,4.8c-6.71,6.52-15.95,9.94-25.14.48a8.88,8.88,0,0,1-2.31-6.26c-.24-14.24-4.14-28.19-10.31-41-8.87-18.48-17.71-39.51-25.13-57.67l-.08-.19A49.25,49.25,0,0,0,134.53,121L64.2,86.44A256.28,256.28,0,0,1,176,12.74l3.43,1.95a68,68,0,0,0,27.66,8.46c19.48,1.7,44.66,9.55,70.23,22.89,48.34,25.24,79.76,60.6,70.16,79Z'
            transform='translate(0 0)' />
          <path className={classes.g}
            d='M217,254.73c-6.07,3.87-13.43,4.51-20.75-3a8.88,8.88,0,0,1-2.31-6.26c-.24-14.24-4.14-28.19-10.31-41-8.87-18.48-17.71-39.51-25.13-57.67,0-.06-.05-.12-.08-.19a48.92,48.92,0,0,0-23.7-25.49L64.2,86.44A255.73,255.73,0,0,1,84.32,66.1l57.62,28.29a61.51,61.51,0,0,1,29.79,32l.09.24c9.33,22.81,20.44,49.24,31.58,72.46,7.75,16.13,12.65,33.66,12.95,51.55A14,14,0,0,0,217,254.73Z'
            transform='translate(0 0)' />
          <path className={classes.h}
            d='M458.84,412.19a256.8,256.8,0,0,1-96.08,76.55l-31.92-22.82c-36.7,8.72-85.12,9.37-128.37-4.75-48.68-15.89-67.22-42.47-72-51.18-10.51-19-18.14-45.81-10.29-51.18,6.52-4.45,20.57,8,31.85,15.19,32.43,20.7,79.42,15.43,120.17,7.94,8.43-1.55,8.33-13.66-.13-15.06-10.26-1.69-20.25-3.2-32-5.16-27.39-4.57-48.2-3.83-50.44-12.42-.72-2.73.08-8.7,3.3-13.45a11.13,11.13,0,0,1,3.74-3.45C212,322,267.29,317.14,305.38,325.32c14.27,3.06,24.58,6.51,31.9,10.25,3.61,1.85,35.63,22.62,35.63,22.62Z'
            transform='translate(0 0)' />
          <path className={classes.g}
            d='M390.44,473.9a255,255,0,0,1-27.68,14.84l-16.57-11.85A43.7,43.7,0,0,0,314,469.21c-34,5.3-74.64,4-111.56-8-48.68-15.89-67.22-42.47-72-51.18-10.51-19-18.14-45.81-10.29-51.18a5.4,5.4,0,0,1,1.25-.62c2.91,9,19.08,34.46,22.95,38,61.31,56.64,137.85,57,183.49,49.66a44.89,44.89,0,0,1,32.7,7.34Z'
            transform='translate(0 0)' />
          <path className={classes.d}
            d='M189.4,346.19a21.47,21.47,0,0,1,3.51-10.34,11.26,11.26,0,0,1,3.75-3.45,35.54,35.54,0,0,1,8.13-3.86c5.84.23,10.47,2.81,11.29,6.77,1.08,5.2-4.79,10.82-13.12,12.55C197.65,349,192.63,348.22,189.4,346.19Z'
            transform='translate(0 0)' />
          <path className={classes.j}
            d='M422.58,290.4c-7.54,14.8-22.05,29.24-31.86,30.06a8.95,8.95,0,0,1-1.69,0c-9.8-.82-24.32-15.26-31.86-30.06-8.38-16.46-4.94-27.12,4.62-29.8,7.9-2.22,17.52,1.7,25.35,12.4a3.47,3.47,0,0,0,5.48,0c7.83-10.7,17.44-14.62,25.34-12.4,9.57,2.68,13,13.34,4.62,29.8Z'
            transform='translate(0 0)' />
          <path className={classes.k}
            d='M402.61,314.89c-4.21,3.21-8.35,5.28-11.89,5.57a8.95,8.95,0,0,1-1.69,0c-9.8-.82-24.32-15.26-31.86-30.06-8.38-16.46-4.94-27.12,4.62-29.8.26-.08.52-.14.79-.2.06,5.35,1.82,11.87,5.66,19.41,8.1,15.9,23,31.46,34.37,35.08Z'
            transform='translate(0 0)' />
        </g>
        <g style={{ opacity: isActive ? 0 : 1 }}>
          <path d='M256,0C114.62,0,0,114.62,0,256S114.62,512,256,512,512,397.38,512,256,397.38,0,256,0Zm0,496C123.45,496,16,388.55,16,256S123.45,16,256,16,496,123.45,496,256,388.55,496,256,496Z' transform='translate(0 0)' />
          <path d='M271,79A177,177,0,1,0,448,256,177,177,0,0,0,271,79Zm0,342.94A165.94,165.94,0,1,1,436.94,256,165.95,165.95,0,0,1,271,421.94Z' transform='translate(0 0)' />
          <path d='M318.49,184.84c-13.93-3.9-30.86,3-44.66,21.86a6.12,6.12,0,0,1-9.66,0c-13.8-18.86-30.73-25.76-44.66-21.86-16.85,4.73-22.91,23.51-8.14,52.51,13.28,26.07,38.86,51.53,56.14,53a14.72,14.72,0,0,0,1.49.07,14.39,14.39,0,0,0,1.48-.07c17.29-1.44,42.87-26.9,56.15-53C341.4,208.35,335.34,189.57,318.49,184.84Zm-5.83,56.45c-10.06,19.75-29.44,39-42.54,40.13-.36,0-.74.05-1.12.05s-.76,0-1.13-.05c-13.09-1.1-32.47-20.38-42.53-40.13-11.19-22-6.6-36.2,6.17-39.78,10.55-3,23.38,2.27,33.83,16.56a4.64,4.64,0,0,0,7.32,0c10.45-14.29,23.28-19.52,33.83-16.56C319.26,205.09,323.85,219.32,312.66,241.29Z' transform='translate(0 0)' />
        </g>
      </svg>

    </span>
  );
};

DonationsIcon.propTypes = {
  isActive: PropTypes.bool,
};

export default DonationsIcon;