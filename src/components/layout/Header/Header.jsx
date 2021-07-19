import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Logo from '../../shared/Logo/Logo';
import UserDropdown from './UserDropdown/UserDropdown';

import classes from './Header.module.scss';

const Header = () => {
  const { user, isLoading } = useSelector(state => state.user);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleUserDropdown = useCallback(() => {
    setIsUserDropdownOpen((isOpen) => !isOpen);
  }, []);

  const closeUserDropdown = useCallback(() => {
    setIsUserDropdownOpen(false);
  }, []);

  return (
    <header className={classes.Header}>
      <Logo />
      { isLoading
        ? (
          <div>Loading...</div>
        )
        : !user
          ? (
            <a
              href={`${import.meta.env.VITE_BASE_SERVER_URL}/api/auth/login`}
              className={classes.LoginBtn}
            >Log in via Google</a>
          )
          : (
            <ul className={classes.NavigationList}>
              <li className={classes.NavigationItem}>
                <NavLink to='/topics'>All topics</NavLink>
              </li>
              <li className={classes.NavigationItem}>
                <NavLink to='/create-topic'>New topic</NavLink>
              </li>
              <li className={classes.NavigationItem}>
                <NavLink to='/collection'>My collection</NavLink>
              </li>
              <li className={classes.NavigationItem}>
                <div className={classes.UserMenu} tabIndex={0} onClick={toggleUserDropdown}>
                  <img src={user.picture} alt='User' />
                </div>

                {isUserDropdownOpen && <UserDropdown closeUserDropdown={closeUserDropdown} />}

              </li>
            </ul>
          )
      }
    </header>
  );
};

export default Header;
