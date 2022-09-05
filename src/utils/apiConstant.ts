export const API_PREFIX = '/api/';

export const API_URL = window.location.origin;

const VERSIONS = {
  1: 'v1',
};

const SERVICE = {
  userService: 'user-service',
};

const ENTITY = {
  users: 'users',
  enterprises: 'enterprises',
};

const API_PATHS = {
  login: `${SERVICE.userService}/${VERSIONS[1]}/${ENTITY.users}/login`,
  enterprises: `${SERVICE.userService}/${VERSIONS[1]}/${ENTITY.enterprises}`,
};

export const API_ENDPOINTS = {
  login: API_PREFIX + API_PATHS.login,
  enterprises: API_PREFIX + API_PATHS.enterprises,
};

export const ERROR_CODE_MESSAGE_MAPPING: any = {
  4002: 'Invalid Username or Password',
};

export const SUCCESS_MESSAGES = {
  loginSuccess: 'Logged In Successfully',
};

export const STATUS_CODE = {
  unauthorized: 401,
  notFound: 404,
  internalServerError: 500,
};

export const ERROR_MESSAGES = {
  internalServerError: 'Something went wrong',
  unauthorized: 'Session Expired, Please login again',
  apiPathNotFound: 'Requested API path not found',
};
