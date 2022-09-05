import React, { useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import http from '../../httpConfig';
import AuthService from '../../services/auth.service';
import { ERROR_MESSAGES, STATUS_CODE } from '../../utils/apiConstant';
import { NonAuthRoutes } from '../../enums';

const HttpInterceptor: React.FC = () => {
  const navigate = useNavigate();

  const handleError = useCallback((error: any) => {
    if (error?.response?.status === STATUS_CODE.unauthorized) {
      toast.error(ERROR_MESSAGES.unauthorized, { icon: false, toastId: 'unauthorized' });
      AuthService.logout();
      navigate(NonAuthRoutes.login);
    } else if (error?.response?.status === STATUS_CODE.notFound) {
      toast.error(ERROR_MESSAGES.apiPathNotFound, { icon: false, toastId: 'not-found' });
      return Promise.reject({ success: false, message: ERROR_MESSAGES.apiPathNotFound });
    } else if (error?.response?.status === STATUS_CODE.internalServerError) {
      toast.error(ERROR_MESSAGES.internalServerError, { icon: false, toastId: 'internal-server-error' });
      return Promise.reject({ success: false, message: ERROR_MESSAGES.internalServerError });
    } else if (!error?.response?.data) {
      toast.error(ERROR_MESSAGES.internalServerError, { icon: false, toastId: 'internalServerError' });
      return Promise.reject({ success: false, message: ERROR_MESSAGES.internalServerError });
    } else {
      return Promise.reject(error?.response?.data);
    }
  }, []);

  useEffect(() => {
    // Request interceptor
    const reqInterceptor = http.interceptors.request.use((config: any) => {
      return config;
    }, (error: any) => {
      return Promise.reject(error);
    });

    // Response interceptor
    const resInterceptor = http.interceptors.response.use((response: any) => {
      return response?.data ?? {};
    }, (error: any) => {
      return handleError(error);
    });

    return () => {
      http.interceptors.request.eject(reqInterceptor);
      http.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return null;
};

export default HttpInterceptor;
