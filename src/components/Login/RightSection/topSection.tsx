import React from 'react';
import LogoMain from '../../../assets/images/logo-main.svg';

const TopSection: React.FC = () => {
  return (
    <div className="top">
      <img src={LogoMain} alt="Medarcus Logo" />
    </div>
  );
};

export default TopSection;
