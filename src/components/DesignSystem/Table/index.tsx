import React, { useContext } from 'react';
import { Table, TableContainer, TableBody } from '@mui/material';
import Pagination from './pagination';
import TableHeader from './header';
import { TableContext } from '../../../contexts';

const CustomizedTable: React.FC = () => {
  const { rows, totalPages } = useContext(TableContext);

  return (
    <div className="d-table" data-testid="table">
      <TableContainer>
        <Table className="table">
          <TableHeader />
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
      {
        totalPages ? (
          <Pagination />
        ) : ''
      }
    </div>
  );
};

export default CustomizedTable;
