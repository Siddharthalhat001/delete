import React from 'react';
import clsx from 'clsx';

interface PaginationItemProps {
  node: React.ReactNode;
  variant?: 'primary' | 'disabled' | 'dots'
}

const PaginationItem: React.FC<PaginationItemProps> = ({ node, variant }) => {
  return (
    <div className={clsx('paging-item', variant)}>
      {node}
    </div>
  );
};

export default PaginationItem;
