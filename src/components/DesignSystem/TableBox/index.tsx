import React from 'react';
import TableBoxHeader from './Header';
import Table from '../Table';

import '../style.scss';

const TableBox: React.FC = () => {
  return (
    <div className="d-table-box-root">
      <div className="table-options">
        <TableBoxHeader />
      </div>
      <div className="table-main">
        <Table />
      </div>
    </div>
  );
};

export default TableBox;
