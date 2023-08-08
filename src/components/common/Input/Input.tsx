import { TextField } from '@mui/material';

const Input = (props: any) => {
  return <TextField {...props} onChange={props.onChange} />;
};

export default Input;
