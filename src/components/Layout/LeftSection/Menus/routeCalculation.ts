import { RoutesMapping } from '../../../../utils/appConstant';

export const getExpandedMenuState = (menuId: string | undefined, currentRoute: string) => {
  return menuId ? RoutesMapping[menuId] && !!RoutesMapping[menuId].find((route) => route === currentRoute) : false;
};
