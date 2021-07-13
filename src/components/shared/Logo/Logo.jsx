import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Logo.module.scss';

const Logo = ({ isLoading }) => (
  <div
    title={isLoading ? 'Loading...' : null}
    className={classNames(classes.Logo, {
      [`${classes.Loading}`]: isLoading,
    })}
  >
    <div className={classes.LeftDrop} />
    <div className={classes.RightDrop} />
  </div>
);

Logo.propTypes = {
  isLoading: PropTypes.bool,
};

Logo.defaultProps = {
  isLoading: false,
};

export default Logo;
