import React from 'react';
import { Button, Select } from '@mui/material';

function RenderButton({ children, ...rest  }) {
    return <Button variant="contained">{ children }</Button>
}
function SelectButton({ children, id, ...rest }) {
  return (
    <Select id={id} {...rest}>
      {children}
    </Select>
  );
}

export { SelectButton };
export default RenderButton;
