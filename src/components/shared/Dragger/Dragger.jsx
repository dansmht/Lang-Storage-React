import React from 'react';

import classes from './Dragger.module.scss';

const Dragger = ({ ...props }) => {
  return (
    <div className={classes.Dragger} {...props}>
      <span />
      <span />
    </div>
  );
};

export default Dragger;
