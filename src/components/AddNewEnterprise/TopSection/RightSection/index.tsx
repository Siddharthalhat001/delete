import React, { useContext } from 'react';
import FormFieldBox from '../../../DesignSystem/FormFieldBox';
import Switch from '../../../DesignSystem/Switch';
import Input from '../../../DesignSystem/Input';
import { AddEnterpriseContext } from '../../../../contexts';
import { VALIDATION_FIELD_MAPPING } from '../../../../utils/appConstant';

const RightSection: React.FC = () => {
  const {
    address, city, state, zipCode, country, isMfa, validation, handleInputChange, handleKeyDown,
  } = useContext(AddEnterpriseContext);

  return (
    <div className="add-new-enterprise-top-right">
      <label className="address-label">Address</label>
      <FormFieldBox
        label="Address"
        input={(
          <Input
            className="add-new-enterprise-input"
            placeholder="Address"
            variant="text"
            name={VALIDATION_FIELD_MAPPING.address}
            value={address}
            onChange={handleInputChange}
            error={!!(validation.field === VALIDATION_FIELD_MAPPING.address)}
            errorMessage={validation.field === VALIDATION_FIELD_MAPPING.address ? validation.message : ''}
            onKeyDown={handleKeyDown}
          />
        )}
      />
      <FormFieldBox
        label="City"
        input={(
          <Input
            className="add-new-enterprise-input"
            placeholder="City"
            variant="text"
            name={VALIDATION_FIELD_MAPPING.city}
            value={city}
            onChange={handleInputChange}
            error={!!(validation.field === VALIDATION_FIELD_MAPPING.city)}
            errorMessage={validation.field === VALIDATION_FIELD_MAPPING.city ? validation.message : ''}
            onKeyDown={handleKeyDown}
          />
        )}
      />
      <FormFieldBox
        label="State"
        input={(
          <Input
            className="add-new-enterprise-input"
            placeholder="State"
            variant="text"
            name={VALIDATION_FIELD_MAPPING.state}
            value={state}
            onChange={handleInputChange}
            error={!!(validation.field === VALIDATION_FIELD_MAPPING.state)}
            errorMessage={validation.field === VALIDATION_FIELD_MAPPING.state ? validation.message : ''}
            onKeyDown={handleKeyDown}
          />
        )}
      />
      <FormFieldBox
        label="Zip Code"
        input={(
          <Input
            className="add-new-enterprise-input"
            placeholder="Zip Code"
            variant="text"
            name={VALIDATION_FIELD_MAPPING.zip}
            value={zipCode}
            onChange={handleInputChange}
            error={!!(validation.field === VALIDATION_FIELD_MAPPING.zip)}
            errorMessage={validation.field === VALIDATION_FIELD_MAPPING.zip ? validation.message : ''}
            onKeyDown={handleKeyDown}
          />
        )}
      />
      <FormFieldBox
        label="Country"
        input={(
          <Input
            className="add-new-enterprise-input"
            placeholder="Country"
            variant="text"
            name={VALIDATION_FIELD_MAPPING.country}
            value={country}
            onChange={handleInputChange}
            error={!!(validation.field === VALIDATION_FIELD_MAPPING.country)}
            errorMessage={validation.field === VALIDATION_FIELD_MAPPING.country ? validation.message : ''}
            onKeyDown={handleKeyDown}
          />
        )}
      />

      <label className="mfa-label">
        Multi-Factor Authentication
        <em>(Secure authentication by entering OTP)</em>
      </label>
      <div className="switch">
        <Switch
          label={isMfa ? 'ON' : 'OFF'}
          checked={isMfa}
          name={VALIDATION_FIELD_MAPPING.mfa}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default RightSection;
