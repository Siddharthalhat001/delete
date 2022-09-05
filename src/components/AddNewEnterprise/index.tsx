import React, {
  useState, useMemo, useCallback, useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import TopSection from './TopSection';
import Buttons from './Buttons';
import { AddEnterpriseContext } from '../../contexts';
import { AuthRoutes } from '../../enums';
import { VALIDATION_FIELD_MAPPING } from '../../utils/appConstant';
import { AddEnterpriseForm, LogoConfigurations } from '../../interfaces/enterprise.interface';
import EnterpriseService from '../../services/enterprise.service';
import { validateAddEnterpriseButton, logoValidation } from './validation';
import { ERROR_CODE_MESSAGE_MAPPING } from '../../utils/apiConstant';

import './style.scss';

const AddNewEnterprise: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<AddEnterpriseForm>({
    enterpriseName: '',
    domainName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    isMfa: false,
    files: [],
  });

  const [logoValidations, setLogoValidation] = useState<LogoConfigurations>({
    isLarge: false,
    width: 0,
    height: 0,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleFileDrop = useCallback((acceptedFiles: any[], fileRejections: any[]) => {
    fileRejections.forEach((file) => {
      file.errors.forEach((err: any) => {
        if (err.code === 'file-too-large') {
          setLogoValidation((prev) => {
            return {
              ...prev,
              isLarge: true,
            };
          });
        }
      });
    });

    acceptedFiles.forEach((file) => {
      const image = new Image();
      image.addEventListener('load', () => {
        setLogoValidation((prev) => {
          return {
            ...prev,
            width: image.width,
            height: image.height,
          };
        });
      });
      image.src = URL.createObjectURL(file);
    });

    setFormData((prev) => {
      return {
        ...prev,
        files: acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file),
          file,
        })),
      };
    });
  }, [setFormData]);

  const handleFileRemove = () => {
    setFormData((prev) => {
      return {
        ...prev,
        files: [],
      };
    });
    setLogoValidation({
      width: 0,
      height: 0,
      isLarge: false,
    });
  };

  const handleInputChange = useCallback((event: any, name: string) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: name === VALIDATION_FIELD_MAPPING.mfa ? event.target.checked : event.target.value,
      };
    });
  }, [setFormData]);

  const handleBackToList = () => {
    navigate(AuthRoutes.manageEnterprise);
  };

  const handleAddEnterprise = useCallback(() => {
    setLoading(true);

    const formBody = new FormData();
    formBody.append('logo', formData?.files[0]?.file);
    formBody.append('data', new Blob([JSON.stringify({
      enterpriseName: formData.enterpriseName,
      domainName: formData.domainName,
      address: formData.address,
      state: formData.state,
      city: formData.city,
      zipCode: formData.zipCode,
      country: formData.country,
      mfaEnabled: formData.isMfa,
    })], { type: 'application/json' }));

    EnterpriseService.addEnterprise(formBody)
      .then(() => {
        setLoading(false);
        navigate(AuthRoutes.manageEnterprise);
      })
      .catch((e: any) => {
        setLoading(false);
        toast.error(ERROR_CODE_MESSAGE_MAPPING[e.code], { icon: false });
      });
  }, [formData.enterpriseName, formData.domainName, formData.address, formData.state, formData.city, formData.zipCode, formData.country, formData.isMfa, formData.files]);

  const handleKeyDown = useCallback((e: any) => {
    if (e.key === 'Enter' && validateAddEnterpriseButton({ ...formData }).validate && logoValidation({ ...logoValidations }).validate) {
      handleAddEnterprise();
    }
  }, [formData.enterpriseName, formData.domainName, formData.address, formData.state, formData.city, formData.zipCode, formData.country, formData.isMfa, logoValidations.isLarge, logoValidations.height, logoValidations.width]);

  const value = useMemo(() => {
    return {
      ...formData,
      validation: validateAddEnterpriseButton({ ...formData }),
      logoValidation: logoValidation({ ...logoValidations }),
      loading,
      handleInputChange,
      handleKeyDown,
      handleFileDrop,
      handleFileRemove,
      handleBackToList,
      handleAddEnterprise,
    };
  }, [formData.enterpriseName, formData.domainName, formData.address, formData.city, formData.state, formData.zipCode, formData.country, formData.isMfa, formData.files, logoValidations.isLarge, logoValidations.height, logoValidations.width, loading]);

  useEffect(() => {
    return () => formData.files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [formData.files]);

  return (
    <div className="add-new-enterprise-form-main">
      <AddEnterpriseContext.Provider value={value}>
        <div className="add-new-enterprise-top">
          <TopSection />
        </div>
        <div className="add-new-enterprise-bottom">
          <Buttons />
        </div>
      </AddEnterpriseContext.Provider>
    </div>
  );
};

export default AddNewEnterprise;
