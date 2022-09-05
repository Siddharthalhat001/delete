import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from '../../../../assets/images/logo-main.svg';
import UserPlaceholder from '../../../../assets/images/user-placeholder.svg';
import AuthService from '../../../../services/auth.service';

const Header: React.FC = () => {
  const username = AuthService.getUserName();

  return (
    <div className="left-section-header">
      <img className="product-symbol-top-header" src={Logo} alt="Product Symbol" />

      <div className="session-user-info">
        <div className="left-section-session-user-info">
          <img className="user-image-session" src={UserPlaceholder} alt="User" />
        </div>
        <div className="right-section-session-user-info">
          <div className="right-top-section-session-user-info">
            <label>{username || ''}</label>
            <ArrowDropDownIcon className="arrow-down" />
          </div>
          <div className="right-bottom-section-session-user-info">
            {/* <span>Registration Supervisor</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
