import React from 'react';
import LeftSection from '../components/Login/LeftSection';
import RightSection from '../components/Login/RightSection';
import './style.scss';
import '../components/DesignSystem/style.scss';

const Login: React.FC = () => {
  return (
    <main className="login-main">
      <div className="left-section">
        <LeftSection />
      </div>
      <div className="right-section">
        <RightSection />
      </div>
    </main>
  );
};

export default Login;
