import React from 'react';

import Breadcrumb from '../components/Breadcrumb';
import EnterpriseList from '../components/ManageEnterprise';

import './style.scss';

const menus = [{
  path: '',
  text: 'Administration',
}, {
  path: '',
  text: 'Manage Enterprise',
}];

const ManageEnterprise: React.FC = () => {
  return (
    <div className="manage-enterprise-main">
      <Breadcrumb menus={menus} />
      <h3>Manage Enterprise</h3>
      <EnterpriseList />
    </div>
  );
};

export default ManageEnterprise;
