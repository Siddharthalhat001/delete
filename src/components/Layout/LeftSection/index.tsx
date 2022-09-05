import React from 'react';
import Header from './Header';
import Menus from './Menus';
import Footer from './Footer';

interface LeftSectionProps {

}

const LeftSection: React.FC<LeftSectionProps> = () => {
  return (
    <div className="layout-left-section-root">
      <Header />
      <Menus />
      <Footer />
    </div>
  );
};

export default LeftSection;
