import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import TopSection from './TopSection';
import TableBox from '../DesignSystem/TableBox';
import Button from '../DesignSystem/Button';
import CustomColumnIcon from '../../assets/images/custom-column-icon.svg';
import { AuthRoutes, SortOrder } from '../../enums';
import EnterpriseRow, { headCells } from './row';
import { TableContext } from '../../contexts';

import './style.scss';

const data = [{
  id: '11111',
  name: 'Ankur',
  address: 'Near circle',
  state: 'Gujarate',
  city: 'Ahmedabad',
  country: 'India',
  zip: '380015',
  logoUrl: 'http:abc.com',
  isMfa: true,
}, {
  id: '211111',
  name: 'Ankur',
  address: 'Near circle',
  state: 'Gujarate',
  city: 'Ahmedabad',
  country: 'India',
  zip: '380015',
  logoUrl: 'http:abc.com',
  isMfa: false,
}, {
  id: '311111',
  name: 'Ankur',
  address: 'Near circle',
  state: 'Gujarate',
  city: 'Ahmedabad',
  country: 'India',
  zip: '380015',
  logoUrl: 'http:abc.com',
  isMfa: false,
}, {
  id: '411111',
  name: 'Ankur',
  address: 'Near circle',
  state: 'Gujarate',
  city: 'Ahmedabad',
  country: 'India',
  zip: '380015',
  logoUrl: 'http:abc.com',
  isMfa: true,
}, {
  id: '511111',
  name: 'Ankur',
  address: 'Near circle',
  state: 'Gujarate',
  city: 'Ahmedabad',
  country: 'India',
  zip: '380015',
  logoUrl: 'http:abc.com',
  isMfa: false,
}, {
  id: '611111',
  name: 'Ankur',
  address: 'Near circle',
  state: 'Gujarate',
  city: 'Ahmedabad',
  country: 'India',
  zip: '380015',
  logoUrl: 'http:abc.com',
  isMfa: true,
}];

const ManageEnterprise: React.FC = () => {
  const tableHeader = 'Enterprise List';
  const rows = data.map((item: any, index: number) => (
    <EnterpriseRow key={index} item={item} />
  ));

  const tableHeaderContent = (
    <div className="table-box-head-content">
      <Link to={AuthRoutes.addEnterprise} className="cancel-btn-link"><Button variant="primary" text="Add New Enterprise" /></Link>
      <img className="table-box-image" src={CustomColumnIcon} alt="Custom Column" />
    </div>
  );

  const value = useMemo(() => {
    return {
      tableHeader, tableHeaderContent, rows, headCells, order: SortOrder.asc, orderBy: 'name', totalPages: 10, onPageChange: () => {}, page: 5, onRequestSort: () => {},
    };
  }, []);

  return (
    <div className="enterprise-list-main">
      <TableContext.Provider value={value}>
        <TopSection />
        <TableBox />
      </TableContext.Provider>
    </div>
  );
};

export default ManageEnterprise;
