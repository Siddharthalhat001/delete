export enum AuthRoutes {
  blank = '/',
  notDefinedRoute = '/*',
  dashboard = '/dashboard',
  search = '/search',
  match = '/match',
  help = '/help',
  manageEnterprise = '/manageEnterprise',
  addEnterprise = '/addEnterprise'
}

export enum NonAuthRoutes {
  login = '/login',
  register = '/register'
}

export enum Roles {
  admin = 'admin',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc'
}
