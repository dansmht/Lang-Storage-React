import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ENTER_CODE, NUMPAD_ENTER_CODE, SPACE_CODE } from '../../../../../utils/constants';
import DropdownItem from '../../../../shared/Dropdown/DropdownItem/DropdownItem';

import classes from './UserDropdownItem.module.scss';

const UserDropdownItem = ({ children, leftIcon: LeftIcon, rightIcon: RightIcon, link, to, goToMenu, setActiveMenu, ...props }) => {

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

      <span className={classes.Text}>{ children }</span>

      {RightIcon && (
        <span className={classes.RightItem}>
          <RightIcon isActive={isActive} />
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

  let additionalHandlers = {};
  if (goToMenu && setActiveMenu) {
    const switchActiveMenu = () => setActiveMenu(goToMenu);
    const onKeyDown = (event) => {
      if ([SPACE_CODE, ENTER_CODE, NUMPAD_ENTER_CODE].includes(event.code)) {
        event.preventDefault();
        switchActiveMenu();
      }
    };

    additionalHandlers = {
      onClick: switchActiveMenu,
      onKeyDown,
    };
  }

  const nextProps = {
    tabIndex: 0,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...additionalHandlers,
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
  rightIcon: PropTypes.func,
  link: PropTypes.bool,
  to: PropTypes.string,
  goToMenu: PropTypes.string,
  setActiveMenu: PropTypes.func,
};

export default UserDropdownItem;
