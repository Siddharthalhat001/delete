import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface BreadcrumItemProps {
  path?: string;
  text: string;
  icon?: any;
}

const BreadcrumItem: React.FC<BreadcrumItemProps> = ({ path, text, icon }) => {
  return (
    <Link to={{ pathname: path }} className={clsx('link', !path && 'no-link')}>
      {icon}
      {text}
    </Link>
  );
};

export default BreadcrumItem;
