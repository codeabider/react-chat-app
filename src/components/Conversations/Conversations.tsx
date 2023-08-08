import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import SplitScreenLayout from '../SplitScreenLayout/SplitScreenLayout';
import RightContent from './RightContent';
import LeftContent from './LeftContent';

import './Conversations.css';

const Conversations = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userID = localStorage.getItem('userID');

    if (!userID) {
      navigate('/');
    }
  }, []);

  return (
    <div>
      <Header />
      <SplitScreenLayout
        leftContent={<LeftContent />}
        rightContent={<RightContent />}
      />
    </div>
  );
};

export default Conversations;
