import React from 'react';
import TopSection from './topSection';
import MiddleSection from './middleSection';
import BottomSection from './bottomSection';

const RightSection: React.FC = () => {
  return (
    <div className="right-section-root">
      <TopSection />
      <MiddleSection />
      <BottomSection />
    </div>
  );
};

export default RightSection;
