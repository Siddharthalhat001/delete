import http from '../httpConfig';
import { Login } from '../interfaces/auth.interface';
import { API_ENDPOINTS } from '../utils/apiConstant';

const login = (payload: Login) => {
  return http.post(API_ENDPOINTS.login, payload);
};

const storeRole = (role: string) => {
  localStorage.setItem('role', role);
};

const getRole = () => {
  return localStorage.getItem('role');
};

const storeUserName = (uname: string) => {
  localStorage.setItem('uname', uname);
};

const getUserName = () => {
  return localStorage.getItem('uname');
};

const logout = () => {
  localStorage.clear();
};

const AuthService = {
  login,
  storeRole,
  getRole,
  storeUserName,
  getUserName,
  logout,
};

export default AuthService;
