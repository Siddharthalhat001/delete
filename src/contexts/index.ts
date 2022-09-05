import { createContext } from 'react';

import { AddEnterpriseType } from '../interfaces/enterprise.interface';

export const ManageEnterpriseContext = createContext<any>({});
export const AddEnterpriseContext = createContext<AddEnterpriseType>({
  enterpriseName: '',
  domainName: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
  files: [],
  isMfa: false,
  validation: {
    validate: false,
  },
  logoValidation: {},
  loading: false,
  handleInputChange: () => {},
  handleKeyDown: () => {},
  handleFileDrop: () => {},
  handleFileRemove: () => {},
  handleBackToList: () => {},
  handleAddEnterprise: () => {},
});
export const TableContext = createContext<any>({});
