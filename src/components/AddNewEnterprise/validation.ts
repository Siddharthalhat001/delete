import isURL from 'validator/lib/isURL';
import { APP_ERROR_MESSAGES, VALIDATION_FIELD_MAPPING, MaxLength } from '../../utils/appConstant';
import { LogoConfigurations, AddEnterpriseForm } from '../../interfaces/enterprise.interface';

export const validateAddEnterpriseButton = ({
  enterpriseName, domainName, address, state, city, zipCode, country,
}: AddEnterpriseForm) => {
  if (enterpriseName.trim().length > MaxLength.addEnterprise.enterpriseName) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.maxLengthEnterpriseName, field: VALIDATION_FIELD_MAPPING.enterpriseName };
  if (domainName.trim().length > MaxLength.addEnterprise.domainName) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.maxLengthDomainName, field: VALIDATION_FIELD_MAPPING.domainName };
  if (domainName.trim() && !isURL(domainName.trim())) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.invalidDomainNameFormat, field: VALIDATION_FIELD_MAPPING.domainName };
  if (address.trim().length > MaxLength.addEnterprise.address) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.maxLengthAddress, field: VALIDATION_FIELD_MAPPING.address };
  if (state.trim().length > MaxLength.addEnterprise.state) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.maxLengthState, field: VALIDATION_FIELD_MAPPING.state };
  if (city.trim().length > MaxLength.addEnterprise.city) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.maxLengthCity, field: VALIDATION_FIELD_MAPPING.city };
  if (zipCode.trim().length > MaxLength.addEnterprise.zip) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.maxLengthZip, field: VALIDATION_FIELD_MAPPING.zip };
  if (country.trim().length > MaxLength.addEnterprise.country) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.maxLengthCountry, field: VALIDATION_FIELD_MAPPING.country };
  if (!enterpriseName.trim()) return { validate: false };
  return { validate: true };
};

export const logoValidation = ({ isLarge, width, height }: LogoConfigurations) => {
  if (width > MaxLength.addEnterprise.logoMaxWidthHeight || height > MaxLength.addEnterprise.logoMaxWidthHeight) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.invalidLogoSize, field: VALIDATION_FIELD_MAPPING.logo };
  if (isLarge) return { validate: false, message: APP_ERROR_MESSAGES.addEnterprise.invalidLogoSize, field: VALIDATION_FIELD_MAPPING.logo };
  return { validate: true };
};
