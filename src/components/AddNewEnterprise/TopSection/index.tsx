import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

const TopSection: React.FC = () => {
  return (
    <div className="add-new-enterprise-top-root">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default TopSection;
