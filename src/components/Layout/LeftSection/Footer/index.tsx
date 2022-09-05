import React from 'react';
import Logo from '../../../../assets/images/logo-main.svg';

const Footer: React.FC = () => {
  return (
    <div className="left-section-footer">
      <img src={Logo} alt="Product Symbol" />
      <label>Copyright © All Rights Reserved.</label>
    </div>
  );
};

export default Footer;
