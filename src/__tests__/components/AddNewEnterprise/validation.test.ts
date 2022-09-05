import { test } from '@jest/globals';
import { validateAddEnterpriseButton, logoValidation } from '../../../components/AddNewEnterprise/validation';
import { APP_ERROR_MESSAGES, VALIDATION_FIELD_MAPPING, MaxLength } from '../../../utils/appConstant';

describe('<Validate Add Enterprise Form />', () => {
  test('Should validate for enterprise max length', () => {
    const result = validateAddEnterpriseButton({
      enterpriseName: 'lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsumlorem-ipsumlorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum',
      domainName: 'abcd',
      address: 'abcd',
      state: 'abcd',
      city: 'abcd',
      zipCode: 'abcd',
      country: 'abcd',
      isMfa: false,
      files: [],
    });
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.enterpriseName);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.addEnterprise.maxLengthEnterpriseName);
  });

  test('Should validate for domain name format', () => {
    const result = validateAddEnterpriseButton({
      enterpriseName: 'abcd',
      domainName: 'lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsumlorem-ipsumlorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum',
      address: 'abcd',
      state: 'abcd',
      city: 'abcd',
      zipCode: 'abcd',
      country: 'abcd',
      isMfa: false,
      files: [],
    });
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.domainName);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.addEnterprise.invalidDomainNameFormat);
  });

  test('Should validate for address max length', () => {
    const result = validateAddEnterpriseButton({
      enterpriseName: 'abcd',
      domainName: 'http://www.google.com',
      address: 'lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsumlorem-ipsumlorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum',
      state: 'abcd',
      city: 'abcd',
      zipCode: 'abcd',
      country: 'abcd',
      isMfa: false,
      files: [],
    });
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.address);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.addEnterprise.maxLengthAddress);
  });

  test('Should validate for state max length', () => {
    const result = validateAddEnterpriseButton({
      enterpriseName: 'abcd',
      domainName: 'http://www.google.com',
      address: 'abcd',
      state: 'lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsumlorem-ipsumlorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum',
      city: 'abcd',
      zipCode: 'abcd',
      country: 'abcd',
      isMfa: false,
      files: [],
    });
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.state);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.addEnterprise.maxLengthState);
  });

  test('Should validate for city max length', () => {
    const result = validateAddEnterpriseButton({
      enterpriseName: 'abcd',
      domainName: 'http://www.google.com',
      address: 'abcd',
      state: 'ipsum',
      city: 'lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsumlorem-ipsumlorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum',
      zipCode: 'abcd',
      country: 'abcd',
      isMfa: false,
      files: [],
    });
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.city);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.addEnterprise.maxLengthCity);
  });

  test('Should validate for zip max length', () => {
    const result = validateAddEnterpriseButton({
      enterpriseName: 'abcd',
      domainName: 'http://www.google.com',
      address: 'abcd',
      state: 'ipsum',
      city: 'ipsum',
      zipCode: 'lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsumlorem-ipsumlorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum',
      country: 'abcd',
      isMfa: false,
      files: [],
    });
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.zip);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.addEnterprise.maxLengthZip);
  });

  test('Should validate for country max length', () => {
    const result = validateAddEnterpriseButton({
      enterpriseName: 'abcd',
      domainName: 'http://www.google.com',
      address: 'abcd',
      state: 'ipsum',
      city: 'ipsum',
      zipCode: 'lorem',
      country: 'lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsumlorem-ipsumlorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum-lorem-ipsum',
      isMfa: false,
      files: [],
    });
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.country);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.addEnterprise.maxLengthCountry);
  });

  test('Should validate for logo width', () => {
    const result = logoValidation({
      width: 200,
      height: 200,
      isLarge: false,
    });
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.logo);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.addEnterprise.invalidLogoSize);
  });

  test('Should validate for logo size', () => {
    const result = logoValidation({
      width: 100,
      height: 100,
      isLarge: true,
    });
    expect(result.validate).toBeFalsy();
    expect(result.field).toEqual(VALIDATION_FIELD_MAPPING.logo);
    expect(result.message).toEqual(APP_ERROR_MESSAGES.addEnterprise.invalidLogoSize);
  });
});
