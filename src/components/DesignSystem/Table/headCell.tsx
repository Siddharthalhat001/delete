import React, { useCallback, useContext } from 'react';
import { TableCell, TableSortLabel } from '@mui/material';
import SortAsc from '@mui/icons-material/ArrowDropUp';
import SortDesc from '@mui/icons-material/ArrowDropDown';
import { ReactComponent as Sort } from '../../../assets/images/sort.svg';
import { SortOrder } from '../../../enums';
import { HeadCellType } from '../../../interfaces/common';
import { TableContext } from '../../../contexts';

interface HeadCellProps {
  cell: HeadCellType;
}

const HeadCell: React.FC<HeadCellProps> = ({
  cell,
}) => {
  const { order, orderBy, onRequestSort } = useContext(TableContext);

  const handleSortClick = useCallback(() => {
    let nextSortOrder: SortOrder = SortOrder.asc;
    if (orderBy === cell.id) {
      if (order === SortOrder.asc) nextSortOrder = SortOrder.desc;
      else nextSortOrder = SortOrder.asc;
    }

    onRequestSort(cell.id, nextSortOrder);
  }, [onRequestSort, cell, orderBy]);

  const getSortIcon = useCallback(() => {
    if (orderBy === cell.id && order === SortOrder.asc) return SortAsc;
    if (orderBy === cell.id && order === SortOrder.desc) return SortDesc;

    return Sort;
  }, [order, orderBy, cell.id]);

  let content;
  if (cell.sortEnabled) {
    content = (
      <TableSortLabel
        active
        onClick={handleSortClick}
        IconComponent={getSortIcon()}
        classes={{
          root: 'sort-label',
          icon: 'sort-icon',
        }}
        data-testid={order === SortOrder.desc && orderBy === cell.id ? 'sort-desc-label' : 'sort-asc-label'}
      >
        <span>
          {cell.label}
        </span>
      </TableSortLabel>
    );
  } else {
    content = (
      <span className="sort-label">
        {cell.label}
      </span>
    );
  }

  return (
    <TableCell
      align={cell.align}
      padding={cell.disablePadding ? 'none' : 'normal'}
      sortDirection={orderBy === cell.id ? order : false}
      style={{ width: cell.width }}
    >
      {content}
    </TableCell>
  );
};

export default HeadCell;
