import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import BreadcrumbItem from './item';

import './style.scss';

type MenuItem = {
  path: string;
  text: string;
  icon?: any;
};

interface BreadcrumProps {
  menus: MenuItem[]
}

const Breadcrum: React.FC<BreadcrumProps> = ({ menus }) => {
  const items = menus.map((item, index) => {
    return <BreadcrumbItem key={index} {...item} />;
  });

  return (
    <Breadcrumbs
      classes={{
        root: 'breadcrumb',
        separator: 'separator',
      }}
      separator={<HorizontalRuleIcon />}
    >
      {items}
    </Breadcrumbs>
  );
};

export default Breadcrum;
