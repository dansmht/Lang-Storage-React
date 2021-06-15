import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Logo from '../../shared/Logo/Logo';

import classes from './Header.module.scss';

const Header = () => {
  const { user, isLoading } = useSelector(state => state.user);

  return (
    <header className={classes.header}>
      <Logo />
      { isLoading
        ? (
          <div>Loading...</div>
        )
        : !user
          ? (
            <a
              href={`${import.meta.env.VITE_BASE_SERVER_URL}/api/auth/login`}
              className={classes.loginBtn}
            >Log in via Google</a>
          )
          : (
            <ul className={classes.navigationList}>
              <li className={classes.navigationItem}>
                <NavLink to='/topics'>All topics</NavLink>
              </li>
              <li className={classes.navigationItem}>
                <NavLink to='/create-topic'>New topic</NavLink>
              </li>
              <li className={classes.navigationItem}>
                <NavLink to='/collection'>My collection</NavLink>
              </li>
              <li className={classes.navigationItem}>
                <div className={classes.userDropdown}>
                  User
                </div>
              </li>
            </ul>
          )
      }
    </header>
  );
};

export default Header;
