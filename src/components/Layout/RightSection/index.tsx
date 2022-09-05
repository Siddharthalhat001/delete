import React from 'react';

interface RightSectionProps {
  children: React.ReactNode;
}

const RightSection: React.FC<RightSectionProps> = ({ children }) => {
  return (
    <div className="layout-right-section-root">
      {children}
    </div>
  );
};

export default RightSection;
