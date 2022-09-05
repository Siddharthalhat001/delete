import React, { useContext } from 'react';
import { TableHead, TableRow } from '@mui/material';
import HeadCell from './headCell';
import { TableContext } from '../../../contexts';

const TableHeader: React.FC = () => {
  const { headCells } = useContext(TableContext);

  const cellContent = headCells.map((headCell: any) => {
    return (
      <HeadCell
        key={headCell.id}
        cell={headCell}
      />
    );
  });

  return (
    <TableHead>
      <TableRow className="table-head-row">
        {cellContent}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
