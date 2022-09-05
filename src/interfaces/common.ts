export interface MenuChild {
  id?: string;
  text: string;
  icon: any;
  redirectsTo?: string;
}

export interface Menu extends MenuChild {
  expandedIcon?: any;
  childrens?: MenuChild[]
}

export interface HeadCellType {
  disablePadding: boolean;
  id: string;
  align: 'left' | 'right' | 'center';
  sortEnabled: boolean;
  width: string;
  label: string;
}
