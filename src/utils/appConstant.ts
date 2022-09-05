import { AuthRoutes, NonAuthRoutes } from '../enums';
import { Menu } from '../interfaces/common';
import IconHomeMenuCollapsed from '../assets/images/menu-home-collapsed.svg';
import IconAdministartionMenuCollapsed from '../assets/images/menu-administration-collapsed.svg';
import IconReportsMenuCollapsed from '../assets/images/menu-reports-collapsed.svg';
import IconHomeMenuExpanded from '../assets/images/menu-home-expanded.svg';
import IconAdministartionMenuExpanded from '../assets/images/menu-administration-expanded.svg';
import IconReportsMenuExpanded from '../assets/images/menu-reports-expanded.svg';
import IconHelpMenuExpanded from '../assets/images/menu-help-expanded.svg';
import IconLogoutMenuExpanded from '../assets/images/menu-logout-expanded.svg';
import IconDashboardChildMenu from '../assets/images/child-menu-dashboard.svg';
import IconSPSearchChildMenu from '../assets/images/child-menu-sp-search.svg';
import IconSPMatchChildMenu from '../assets/images/child-menu-sp-match.svg';

export const TABLE_CONSTANTS = {
  perPage: 10,
  noRecordsFound: 'No records to display',
  sort: {
    asc: 'asc',
    desc: 'desc',
  },
};

export const MenuTextMapping = {
  home: 'home',
  reports: 'reports',
  administartion: 'administartion',
  help: 'help',
  logout: 'logout',
};

export const RoutesMapping = {
  [MenuTextMapping.home]: [AuthRoutes.dashboard, AuthRoutes.search, AuthRoutes.match],
  [MenuTextMapping.administartion]: [AuthRoutes.manageEnterprise, AuthRoutes.addEnterprise],
};

export const Menus: Menu[] = [
  {
    text: 'Home',
    icon: IconHomeMenuCollapsed,
    id: MenuTextMapping.home,
    expandedIcon: IconHomeMenuExpanded,
    childrens: [
      {
        text: 'Surepatient Dashboard',
        icon: IconDashboardChildMenu,
        redirectsTo: AuthRoutes.dashboard,
      },
      {
        text: 'Surepatient Search',
        icon: IconSPSearchChildMenu,
        redirectsTo: AuthRoutes.search,
      },
      {
        text: 'Surepatient Match',
        icon: IconSPMatchChildMenu,
        redirectsTo: AuthRoutes.match,
      },
    ],
  },
  {
    text: 'Reports',
    icon: IconReportsMenuCollapsed,
    id: MenuTextMapping.reports,
    expandedIcon: IconReportsMenuExpanded,
  },
  {
    text: 'Administration',
    id: MenuTextMapping.administartion,
    icon: IconAdministartionMenuCollapsed,
    expandedIcon: IconAdministartionMenuExpanded,
    childrens: [
      {
        text: 'Manage Enterprise',
        icon: IconDashboardChildMenu,
        redirectsTo: AuthRoutes.manageEnterprise,
      },
    ],
  },
  {
    text: 'Help',
    id: MenuTextMapping.help,
    icon: IconHelpMenuExpanded,
    redirectsTo: AuthRoutes.help,
  },
  {
    text: 'Logout',
    id: MenuTextMapping.help,
    icon: IconLogoutMenuExpanded,
    redirectsTo: NonAuthRoutes.login,
  },
];

export const VALIDATION_FIELD_MAPPING = {
  uname: 'username',
  password: 'password',
  enterpriseName: 'enterpriseName',
  domainName: 'domainName',
  address: 'address',
  city: 'city',
  state: 'state',
  zip: 'zipCode',
  country: 'country',
  mfa: 'isMfa',
  logo: 'logo',
};

export const APP_ERROR_MESSAGES = {
  maxLengthUsername: 'Username cannot be longer than 50 characters.',
  maxLengthPassword: 'Password cannot be longer than 50 characters.',
  addEnterprise: {
    maxLengthEnterpriseName: 'Enterprise name cannot be longer than 100 characters.',
    maxLengthDomainName: 'Domain name cannot be longer than 500 characters.',
    invalidDomainNameFormat: 'Invalid Domain Name format.',
    maxLengthAddress: 'Address cannot be longer than 100 characters.',
    maxLengthCity: 'City cannot be longer than 50 characters.',
    maxLengthState: 'State cannot be longer than 50 characters.',
    maxLengthCountry: 'Country cannot be longer than 50 characters.',
    maxLengthZip: 'ZipCode cannot be longer than 10 characters.',
    invalidLogoSize: 'Please add logo in jpeg, png, gif format with dimension 2x2 and size max 5 MB.',
  },
};

export const MaxLength = {
  login: {
    username: 50,
    password: 50,
  },
  addEnterprise: {
    enterpriseName: 100,
    address: 100,
    city: 50,
    state: 50,
    country: 50,
    zip: 10,
    domainName: 500,
    logo: 5000000,
    logoMaxWidthHeight: 192,
  },
};
