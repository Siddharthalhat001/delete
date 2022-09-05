import { APP_ERROR_MESSAGES, VALIDATION_FIELD_MAPPING, MaxLength } from '../../utils/appConstant';

export const validateLoginButton = (username: string, password: string) => {
  if (username.trim().length > MaxLength.login.username) return { validate: false, message: APP_ERROR_MESSAGES.maxLengthUsername, field: VALIDATION_FIELD_MAPPING.uname };
  if (password.trim().length > MaxLength.login.password) return { validate: false, message: APP_ERROR_MESSAGES.maxLengthPassword, field: VALIDATION_FIELD_MAPPING.password };
  if (!username.trim() || !password.trim()) return { validate: false };
  return { validate: true };
};
