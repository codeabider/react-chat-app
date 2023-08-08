import { LinearProgress, CircularProgress } from '@mui/material';

const Progress = ({ isLinear, ...props }: any) => {
  if (isLinear) return <LinearProgress {...props} />;
  return <CircularProgress {...props} />;
};

export default Progress;
