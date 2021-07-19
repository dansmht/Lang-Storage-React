import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../shared/Dropdown/Dropdown';
import UserDropdownItem from './UserDropdownItem/UserDropdownItem';
import LanguageIcon from '../../../shared/Icons/LanguageIcon/LanguageIcon';
import DonationsIcon from '../../../shared/Icons/DonationsIcon/DonationsIcon';
import DarkModeIcon from '../../../shared/Icons/DarkModeIcon/DarkModeIcon';
import LogOutIcon from '../../../shared/Icons/LogOutIcon/LogOutIcon';

import classes from './UserDropdown.module.scss';

const UserDropdown = ({ closeUserDropdown }) => {

  return (
    <Dropdown className={classes.UserDropdown} close={closeUserDropdown}>
      <UserDropdownItem
        leftIcon={LanguageIcon}
        rightItem={<div>&gt;</div>}
      >
        Language
      </UserDropdownItem>
      <UserDropdownItem
        leftIcon={DonationsIcon}
        rightItem={<div>link</div>}
        link
        to='donations'
      >
          Donations
      </UserDropdownItem>
      <UserDropdownItem
        leftIcon={DarkModeIcon}
        rightItem={<div>Tgl</div>}
      >
        Dark Mode
      </UserDropdownItem>
      <UserDropdownItem
        leftIcon={LogOutIcon}
      >
        Log Out
      </UserDropdownItem>
    </Dropdown>
  );
};

UserDropdown.propTypes = {
  closeUserDropdown: PropTypes.func.isRequired,
};

export default UserDropdown;
