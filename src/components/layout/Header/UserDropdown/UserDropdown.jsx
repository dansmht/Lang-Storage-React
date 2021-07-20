import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import { toggleDarkMode } from '../../../../redux/actions/settingsActions';
import Dropdown from '../../../shared/Dropdown/Dropdown';
import UserDropdownItem from './UserDropdownItem/UserDropdownItem';
import LanguageIcon from './UserDropdownItem/Icons/LanguageIcon/LanguageIcon';
import DonationsIcon from './UserDropdownItem/Icons/DonationsIcon/DonationsIcon';
import DarkModeIcon from './UserDropdownItem/Icons/DarkModeIcon/DarkModeIcon';
import LogOutIcon from './UserDropdownItem/Icons/LogOutIcon/LogOutIcon';
import RightLinkIcon from './UserDropdownItem/Icons/RightLinkIcon/RightLinkIcon';
import RightDarkModeIcon from './UserDropdownItem/Icons/RightDarkModeIcon/RightDarkModeIcon';
import RightNextDropdownIcon from './UserDropdownItem/Icons/RightNextDropdownIcon/RightNextDropdownIcon';

import classes from './UserDropdown.module.scss';

const UserDropdown = ({ closeUserDropdown }) => {
  const dispatch = useDispatch();

  const [activeMenu, setActiveMenu] = useState('main');

  const onDarkModeClick = useCallback(() => {
    dispatch(toggleDarkMode());
  }, []);

  return (
    <Dropdown className={classes.UserDropdown} close={closeUserDropdown}>

      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={300}
        classNames={{
          enter: classes.PrimaryMenuEnter,
          enterActive: classes.PrimaryMenuEnterActive,
          exit: classes.PrimaryMenuExit,
          exitActive: classes.PrimaryMenuExitActive,
        }}
      >
        <div className={classes.Menu}>
          <UserDropdownItem
            leftIcon={LanguageIcon}
            rightIcon={RightNextDropdownIcon}
            goToMenu='language'
            setActiveMenu={setActiveMenu}
          >
            Language
          </UserDropdownItem>
          <UserDropdownItem
            leftIcon={DonationsIcon}
            rightIcon={RightLinkIcon}
            link
            to='donations'
          >
            Donations
          </UserDropdownItem>
          <UserDropdownItem
            leftIcon={DarkModeIcon}
            rightIcon={RightDarkModeIcon}
            onClick={onDarkModeClick}
          >
            Dark Mode
          </UserDropdownItem>
          <UserDropdownItem
            leftIcon={LogOutIcon}
          >
            Log Out
          </UserDropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'language'}
        unmountOnExit
        timeout={300}
        classNames={{
          enter: classes.LanguageMenuEnter,
          enterActive: classes.LanguageMenuEnterActive,
          exit: classes.LanguageMenuExit,
          exitActive: classes.LanguageMenuExitActive,
        }}
      >
        <div className={classes.Menu}>
          <UserDropdownItem
            leftIcon={LanguageIcon}
            rightIcon={RightNextDropdownIcon}
            goToMenu='main'
            setActiveMenu={setActiveMenu}
          >
            Language
          </UserDropdownItem>
          <UserDropdownItem
            leftIcon={LanguageIcon}
            rightIcon={RightNextDropdownIcon}
          >
            Test
          </UserDropdownItem>
        </div>
      </CSSTransition>

    </Dropdown>
  );
};

UserDropdown.propTypes = {
  closeUserDropdown: PropTypes.func.isRequired,
};

export default UserDropdown;
