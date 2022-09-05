import http from '../httpConfig';
import { API_ENDPOINTS } from '../utils/apiConstant';

const addEnterprise = (payload: any) => {
  return http.post(API_ENDPOINTS.enterprises, payload);
};

const EnterpriseService = {
  addEnterprise,
};

export default EnterpriseService;
