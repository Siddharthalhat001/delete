import React from 'react';
import Button from '../../DesignSystem/Button';
import LoginBoxImage from '../../../assets/images/login-box-image.svg';

const BottomSection: React.FC = () => {
  return (
    <div className="bottom">
      <span>Don't have an account?</span>
      <Button variant="error" text="Sign up" />
      <img src={LoginBoxImage} alt="Hospital Building" />
    </div>
  );
};

export default BottomSection;
