import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DropdownItem from '../../../../shared/Dropdown/DropdownItem/DropdownItem';

import classes from './UserDropdownItem.module.scss';

const UserDropdownItem = ({ children, leftIcon: LeftIcon, rightItem: RightItem, link, to, ...props }) => {

  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  const onFocus = useCallback(() => setFocused(true), []);
  const onBlur = useCallback(() => setFocused(false), []);

  const isActive = hovered || focused;

  const body = (
    <>
      {LeftIcon && (
        <span className={classes.LeftIcon}>
          <LeftIcon isActive={isActive} />
        </span>
      )}

      <span>{ children }</span>

      {RightItem && (
        <span className={classes.RightItem}>
          <RightItem isActive={isActive} />
        </span>)}
    </>
  );

  if (link) {
    const linkProps = {
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
    };

    return (
      <DropdownItem nonTappable {...props}>
        <Link to={to || '/'} className={classes.UserDropdownItem} {...linkProps}>
          { body }
        </Link>
      </DropdownItem>
    );
  }

  const nextProps = {
    tabIndex: 0,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...props,
  };

  return (
    <DropdownItem {...nextProps}>
      <span className={classes.UserDropdownItem}>
        { body }
      </span>
    </DropdownItem>
  );
};

UserDropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.func,
  rightItem: PropTypes.func,
  link: PropTypes.bool,
  to: PropTypes.string,
};

export default UserDropdownItem;
