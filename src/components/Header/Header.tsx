import { useNavigate } from 'react-router-dom';

import SettingsPowerIcon from '@mui/icons-material/SettingsPower';

import CustomButton from '../common/Button/Button';
import { useAppSelector } from '../../redux/hooks';

import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { selectedUser } = useAppSelector((state) => state.selectedUser);

  const handleLogout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem('userID');
    // TODO: reset store on logout
    navigate('/');
  };

  return (
    <header className='header'>
      <h4 className='filler'>{selectedUser?.name?.toUpperCase()}</h4>
      <CustomButton isIconButton onClick={handleLogout}>
        <SettingsPowerIcon />
      </CustomButton>
    </header>
  );
};

export default Header;
