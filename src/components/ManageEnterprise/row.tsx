import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import ElipsisCell from '../DesignSystem/Table/Cells/ElipsisCell';
import Switch from '../DesignSystem/Switch';
import { HeadCellType } from '../../interfaces/common';
import LogoSample from '../../assets/images/enterprise-logo-sample.png';

export const headCells: HeadCellType[] = [
  {
    id: 'id',
    align: 'left',
    disablePadding: false,
    sortEnabled: true,
    label: 'Enterprise ID',
    width: '12%',
  },
  {
    id: 'logo',
    align: 'left',
    disablePadding: false,
    sortEnabled: true,
    label: 'Logo',
    width: '8%',
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    sortEnabled: true,
    label: 'Enterprise Name',
    width: '15%',
  },
  {
    id: 'address',
    align: 'left',
    disablePadding: false,
    sortEnabled: true,
    label: 'Address',
    width: '10%',
  },
  {
    id: 'state',
    align: 'left',
    disablePadding: false,
    sortEnabled: true,
    label: 'State',
    width: '10%',
  },
  {
    id: 'city',
    align: 'left',
    disablePadding: false,
    sortEnabled: true,
    label: 'City',
    width: '10%',
  },
  {
    id: 'country',
    align: 'left',
    disablePadding: false,
    sortEnabled: true,
    label: 'Country',
    width: '10%',
  },
  {
    id: 'zip',
    align: 'left',
    disablePadding: false,
    sortEnabled: true,
    label: 'ZIP',
    width: '7%',
  },
  {
    id: 'mfa',
    align: 'left',
    disablePadding: false,
    sortEnabled: true,
    label: 'MFA',
    width: '10%',
  },
  {
    id: 'action',
    align: 'left',
    disablePadding: false,
    sortEnabled: false,
    label: 'Action',
    width: '8%',
  },
];

interface EnterpriseRowProps {
  item: any;
}

const EnterpriseRow: React.FC<EnterpriseRowProps> = ({ item }) => {
  const nameContent = (
    <div className="enterprise-name">
      <a href="#">{item.name}</a>
    </div>
  );

  return (
    <TableRow className="table-body-row">
      <ElipsisCell width="12%" align="left" text={item.id} />
      <TableCell align="left" style={{ width: '8%' }}>
        <img className="enterprise-logo" src={LogoSample} alt="Enterprise Identity" />
      </TableCell>
      <ElipsisCell width="15%" align="left" text="" node={nameContent} />
      <ElipsisCell width="10%" align="left" text={item.address} />
      <ElipsisCell width="10%" align="left" text={item.state} />
      <ElipsisCell width="10%" align="left" text={item.city} />
      <ElipsisCell width="10%" align="left" text={item.country} />
      <ElipsisCell width="7%" align="left" text={item.zip} />
      <TableCell align="left" style={{ width: '10%' }}>
        <Switch label={item.isMfa ? 'ON' : 'OFF'} name="mfa" checked={item.isMfa} onChange={() => {}} />
      </TableCell>
      <TableCell align="left" style={{ width: '8%' }}>
        <EditIcon />
        <MoreVertIcon />
      </TableCell>
    </TableRow>
  );
};

export default EnterpriseRow;
