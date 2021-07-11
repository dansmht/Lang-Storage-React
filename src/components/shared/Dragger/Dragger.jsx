import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Dragger.module.scss';

const Dragger = ({ isDragging, ...props }) => {
  return (
    <div className={classNames(classes.Dragger, { [`${classes.Dragging}`]: isDragging })} {...props}>
      <span />
      <span />
    </div>
  );
};

Dragger.propTypes = {
  isDragging: PropTypes.bool,
};

export default Dragger;
