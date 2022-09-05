import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthRoutes } from '../../../enums';
import FormFieldBox from '../../DesignSystem/FormFieldBox';
import Input from '../../DesignSystem/Input';
import Button from '../../DesignSystem/Button';
import AuthService from '../../../services/auth.service';
import { ERROR_CODE_MESSAGE_MAPPING, SUCCESS_MESSAGES } from '../../../utils/apiConstant';
import { VALIDATION_FIELD_MAPPING } from '../../../utils/appConstant';
import { validateLoginButton } from '../validation';

const MiddleSection: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<{
    username: string,
    password: string
  }>({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [validation, setValidation] = useState<any>(validateLoginButton(formData.username, formData.password));

  const handleInputChange = useCallback((event: any, name: string) => {
    setFormData((prev) => {
      return {
        ...prev,
        [name]: event.target.value,
      };
    });

    if (name === VALIDATION_FIELD_MAPPING.uname) {
      setValidation(validateLoginButton(event.target.value, formData.password));
    } else {
      setValidation(validateLoginButton(formData.username, event.target.value));
    }
  }, [setFormData, setValidation, formData.password, formData.username]);

  const handleLogin = useCallback(() => {
    setLoading(true);
    AuthService.login({
      username: formData.username.trim(),
      password: formData.password.trim(),
    })
      .then((response: any) => {
        setLoading(false);
        AuthService.storeUserName(response.data?.user?.name ?? '');
        toast.success(SUCCESS_MESSAGES.loginSuccess, { icon: false });
        navigate(AuthRoutes.dashboard);
      })
      .catch((e: any) => {
        setLoading(false);
        toast.error(ERROR_CODE_MESSAGE_MAPPING[e.code], { icon: false });
      });
  }, [formData.username, formData.password, setLoading]);

  const handleKeyDown = useCallback((e: any) => {
    if (e.key === 'Enter' && validateLoginButton(formData.username, formData.password).validate) {
      handleLogin();
    }
  }, [handleLogin, formData.username, formData.password]);

  return (
    <div className="middle">
      <FormFieldBox
        label="Username"
        input={(
          <Input
            variant="text"
            name={VALIDATION_FIELD_MAPPING.uname}
            placeholder="Username"
            value={formData.username}
            error={!!(validation.field === VALIDATION_FIELD_MAPPING.uname)}
            errorMessage={validation.field === VALIDATION_FIELD_MAPPING.uname ? validation.message : ''}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        )}
      />

      <FormFieldBox
        label="Password"
        input={(
          <Input
            variant="password"
            name={VALIDATION_FIELD_MAPPING.password}
            type="password"
            placeholder="&#8727;&#8727;&#8727;&#8727;&#8727;&#8727;&#8727;&#8727;"
            value={formData.password}
            error={!!(validation.field === VALIDATION_FIELD_MAPPING.password)}
            errorMessage={validation.field === VALIDATION_FIELD_MAPPING.password ? validation.message : ''}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        )}
      />

      <div className="forgot-password">
        <a href="#">Forgot Password</a>
      </div>

      <div className="login-btn">
        <Button variant="primary" text="Login" loading={loading} disabled={!validation.validate} onClick={handleLogin} />
      </div>
    </div>
  );
};

export default MiddleSection;
