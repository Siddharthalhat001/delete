import React from 'react';
import Menu from './Menu';
import { Menus as SideMenus } from '../../../../utils/appConstant';

const Menus: React.FC = () => {
  return (
    <div className="left-section-menus">
      {
        SideMenus.map((sideMenu, index) => {
          return <Menu key={index} {...sideMenu} />;
        })
      }
    </div>
  );
};

export default Menus;
