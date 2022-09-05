import React from 'react';
import { Switch } from '@mui/material';

interface CustomizedSwitchProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (_: any, name: string) => void;
}

const CustomizedSwitch: React.FC<CustomizedSwitchProps> = ({
  label, name, checked, onChange,
}) => {
  return (
    <div className="d-switch">
      <Switch
        classes={{
          root: 'switch-root',
          track: 'switch-track',
          thumb: 'switch-thumb',
          switchBase: 'switch-base',
        }}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e, name)}
      />
      {label}
    </div>
  );
};

export default CustomizedSwitch;
