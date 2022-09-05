import React from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';
import Spinner from '../../Spinner';

interface LoadingRowProps {
  colSpan: number;
}

const LoadingRow: React.FC<LoadingRowProps> = ({ colSpan }) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell className="loading-row" colSpan={colSpan}>
          <Spinner size={30} />
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default LoadingRow;
