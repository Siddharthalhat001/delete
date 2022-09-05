import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { MenuChild as MenuChildProps } from '../../../../interfaces/common';

const MenuChild: React.FC<MenuChildProps> = ({ icon, text, redirectsTo }) => {
  const navigate = useNavigate();
  const currentRoute = window.location.pathname;
  const active = redirectsTo === currentRoute;

  const handleMenuClick = useCallback(() => {
    redirectsTo && navigate(redirectsTo);
  }, [navigate]);

  return (
    <div className="menu-child">
      <img className="menu-child-icon" src={icon} alt="Menu" onClick={handleMenuClick} />
      <span className={clsx(active && 'active')} onClick={handleMenuClick}>{text}</span>
    </div>
  );
};

export default MenuChild;
