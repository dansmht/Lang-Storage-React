import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './DropdownItem.module.scss';

const DropdownItem = ({ children, className, nonTappable, ...props }) => {
  return (
    <li className={classNames(classes.DropdownItem, className)} {...{ tabIndex: !nonTappable ? 0 : null }} {...props}>
      { children }
    </li>
  );
};

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  nonTappable: PropTypes.bool,
};

export default DropdownItem;
