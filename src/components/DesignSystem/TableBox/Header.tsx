import React, { useContext } from 'react';
import { TableContext } from '../../../contexts';

const TableBoxHeader: React.FC = () => {
  const { tableHeader, tableHeaderContent } = useContext(TableContext);

  return (
    <div className="table-box-header-root">
      <h3 className="table-box-header">{tableHeader}</h3>
      {tableHeaderContent}
    </div>
  );
};

export default TableBoxHeader;
