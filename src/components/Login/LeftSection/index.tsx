import React from 'react';
import LoginImage from '../../../assets/images/login-image.svg';
import '../style.scss';

const LeftSection: React.FC = () => {
  return (
    <>
      <h1 className="title">HEALTHCARE IT</h1>
      <p className="local-desscription">Medarcus is a pioneering healthcare product and services company leveraging applied research to provide patient safety, regulatory compliance, and revenue recovery solutions.</p>
      <img src={LoginImage} className="image-main-login" alt="Login Logo" />
    </>
  );
};

export default LeftSection;
