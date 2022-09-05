import React, { useCallback, useState, useMemo } from 'react';
import clsx from 'clsx';
import { Menu as MenuProps } from '../../../../interfaces/common';
import MenuChild from './MenuChild';
import AddIcon from '../../../../assets/images/add.svg';
import RemoveIcon from '../../../../assets/images/remove.svg';
import { getExpandedMenuState } from './routeCalculation';

const Menu: React.FC<MenuProps> = ({
  id, icon, expandedIcon, text, childrens,
}) => {
  const currentRoute = window.location.pathname;
  const selected = getExpandedMenuState(id, currentRoute);

  const [expanded, setExpanded] = useState<boolean>(selected);

  const handleExpandCollapse = useCallback(() => {
    setExpanded((prev) => !prev);
  }, [setExpanded]);

  return (
    <div className="menu">
      <div className={clsx('menu-root', expanded && 'expanded')}>
        <img className="menu-icon" src={expanded ? expandedIcon : icon} alt="Menu" />
        <span>{text}</span>
        { childrens && childrens.length > 0 && <img className="expand-collapse-icon" src={expanded ? RemoveIcon : AddIcon} alt="Expand-Collapse" onClick={handleExpandCollapse} /> }
      </div>

      {
        expanded && (
          <div className="menu-child-root">
            {
              childrens?.map((childMenu, index) => {
                return <MenuChild key={index} {...childMenu} />;
              })
            }
          </div>
        )
      }
    </div>
  );
};

export default Menu;
