import React, { useContext } from 'react';
import FormFieldBox from '../../../DesignSystem/FormFieldBox';
import Input from '../../../DesignSystem/Input';
import Dropzone from '../../../DesignSystem/Dropzone';
import { VALIDATION_FIELD_MAPPING, MaxLength } from '../../../../utils/appConstant';
import { AddEnterpriseContext } from '../../../../contexts';

const LeftSection: React.FC = () => {
  const {
    enterpriseName, domainName, validation, logoValidation, files, handleInputChange, handleKeyDown, handleFileDrop, handleFileRemove,
  } = useContext(AddEnterpriseContext);

  return (
    <div className="add-new-enterprise-top-left">
      <label className="label">Manage Enterprise Profile</label>
      <FormFieldBox
        label="Enterprise Name"
        required
        input={(
          <Input
            className="add-new-enterprise-input"
            placeholder="Enterprise Name"
            variant="text"
            name={VALIDATION_FIELD_MAPPING.enterpriseName}
            value={enterpriseName}
            onChange={handleInputChange}
            error={!!(validation.field === VALIDATION_FIELD_MAPPING.enterpriseName)}
            errorMessage={validation.field === VALIDATION_FIELD_MAPPING.enterpriseName ? validation.message : ''}
            onKeyDown={handleKeyDown}
          />
        )}
      />
      <FormFieldBox
        label="Domain Name"
        input={(
          <Input
            className="add-new-enterprise-input"
            placeholder="Domain Name"
            variant="text"
            name={VALIDATION_FIELD_MAPPING.domainName}
            value={domainName}
            onChange={handleInputChange}
            error={!!(validation.field === VALIDATION_FIELD_MAPPING.domainName)}
            errorMessage={validation.field === VALIDATION_FIELD_MAPPING.domainName ? validation.message : ''}
            onKeyDown={handleKeyDown}
          />
        )}
      />

      <label className="add-logo-label">Add Logo</label>
      <ul className="logo-validations">
        <li>Logo dimension must be of passport size (2x2) and below 5 MB</li>
        <li>Supported Formats: PNG, JPEG &#38; GIF</li>
      </ul>
      <div className="add-logo">
        <Dropzone
          files={files}
          noClick
          noKeyboard
          maxFiles={1}
          accept={{
            'image/*': ['.jpeg', '.png'],
          }}
          maxSize={MaxLength.addEnterprise.logo}
          onDrop={handleFileDrop}
          onFileRemove={handleFileRemove}
        />
      </div>
      {!logoValidation.validate && <label className="d-error">{logoValidation.message}</label>}
    </div>
  );
};

export default LeftSection;
