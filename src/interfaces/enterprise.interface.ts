export interface AddEnterpriseForm {
  enterpriseName: string,
  domainName: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  country: string,
  isMfa: boolean,
  files: any[]
}

export interface LogoConfigurations {
  isLarge: boolean;
  width: number;
  height: number;
}

export interface AddEnterpriseType extends AddEnterpriseForm {
  files: any[],
  logoValidation: any,
  validation: {
    validate: boolean,
    message?: string,
    field?: string
  },
  loading: boolean,
  handleInputChange: (e: any, name: string) => void,
  handleKeyDown: (e: any) => void,
  handleFileDrop: (_: any[], rejections: any[]) => void,
  handleFileRemove: () => void,
  handleBackToList: () => void,
  handleAddEnterprise: () => void
}
