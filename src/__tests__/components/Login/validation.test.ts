import { test } from '@jest/globals';
import { validateLoginButton } from '../../../components/Login/validation';
import { APP_ERROR_MESSAGES, VALIDATION_FIELD_MAPPING, MaxLength } from '../../../utils/appConstant';

describe('<Validate Login Button />', () => {
  test('Should validate for username max length', () => {
    const result = validateLoginButton('lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsumlorem-ipsumlorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum', 'password@123');
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.uname);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.maxLengthUsername);
  });

  test('Should validate for password max length', () => {
    const result = validateLoginButton('username', 'lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsumlorem-ipsumlorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum');
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.password);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.maxLengthPassword);
  });

  test('Should validate for blank username', () => {
    const result = validateLoginButton('', 'abcd');
    expect(result.validate).toBeFalsy();
  });

  test('Should validate for blank password', () => {
    const result = validateLoginButton('abcd', '');
    expect(result.validate).toBeFalsy();
  });

  test('Should validate for correct credentials', () => {
    const result = validateLoginButton('abcd', 'paassword@123');
    expect(result.validate).toBeTruthy();
  });
});
