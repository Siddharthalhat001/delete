import React, { useContext } from 'react';
import Button from '../../DesignSystem/Button';
import { AddEnterpriseContext } from '../../../contexts';

const Buttons: React.FC = () => {
  const {
    validation, logoValidation, handleBackToList, handleAddEnterprise, loading,
  } = useContext(AddEnterpriseContext);

  return (
    <div className="add-new-enterprise-form-buttons">
      <Button variant="greyed" text="Cancel" onClick={handleBackToList} />
      <Button variant="primary" text="Save" loading={loading} onClick={handleAddEnterprise} disabled={!validation.validate || !logoValidation.validate} />
    </div>
  );
};

export default Buttons;
