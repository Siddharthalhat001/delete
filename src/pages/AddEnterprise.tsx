import React from 'react';
import AddNewEnterpriseForm from '../components/AddNewEnterprise';
import Breadcrum from '../components/Breadcrumb';
import { AuthRoutes } from '../enums';

import './style.scss';

const menus = [{
  path: '',
  text: 'Administration',
}, {
  path: AuthRoutes.manageEnterprise,
  text: 'Manage Enterprise',
}, {
  path: '',
  text: 'Add New Enterprise',
}];

const AddEnterprise: React.FC = () => {
  return (
    <div className="add-enterprise-main">
      <Breadcrum menus={menus} />
      <h3>Add New Enterprise</h3>
      <AddNewEnterpriseForm />
    </div>
  );
};

export default AddEnterprise;
