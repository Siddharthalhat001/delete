import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import './style.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="layout-main">
      <LeftSection />
      <RightSection>{ children }</RightSection>
    </main>
  );
};

export default Layout;
