import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Dropdown = ({ menuItems, onChange, label }: any) => {
  const [selected, setSelected] = useState('');

  const handleChange = (e: any) => {
    const val = e.target.value;
    setSelected(val);
    onChange(val);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <Select value={selected} label='Contacts' onChange={handleChange}>
        {menuItems?.map((item: any) => (
          <MenuItem key={item.id} value={item}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
