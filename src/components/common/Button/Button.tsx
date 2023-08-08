import { Button, IconButton } from '@mui/material';

const CustomButton = ({ isIconButton, ...props }: any) => {
  if (isIconButton) return <IconButton {...props}>{props.children}</IconButton>;

  return <Button {...props}>{props.children}</Button>;
};

export default CustomButton;
