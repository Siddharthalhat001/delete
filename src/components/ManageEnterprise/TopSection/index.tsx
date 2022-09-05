import React from 'react';
import Button from '../../DesignSystem/Button';
import Input from '../../DesignSystem/Input';

const TopSection: React.FC = () => {
  return (
    <div className="enterprise-list-top-section">
      <div className="search-input">
        <Input variant="text" name="enterprise-search" placeholder="Search Enterprise by ID or name" />
      </div>
      <div className="add-enterprise">
        <Button variant="primary" text="Search" />
      </div>
    </div>
  );
};

export default TopSection;
