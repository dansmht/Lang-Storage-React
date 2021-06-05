import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo/Logo';

import classes from './Header.module.scss';

const Header = ({ isWelcomePage }) => {
  return (
    <header className={classes.header}>
      <Logo />
      {
        isWelcomePage
          ? (
            <a
              href={`${import.meta.env.VITE_BASE_SERVER_URL}/api/auth/login`}
              className={classes.loginBtn}
            >Log in via Google</a>
          )
          : (
            <ul className={classes.navigationList}>
              <li className={classes.navigationItem}>
                <NavLink to='/create-topic'>New topic</NavLink>
              </li>
              <li className={classes.navigationItem}>
                <NavLink to='/feed'>Feed</NavLink>
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

Header.propTypes = {
  isWelcomePage: PropTypes.bool,
};

Header.defaultProps = {
  isWelcomePage: false,
};

export default Header;
