import { useState } from 'react';
import { List } from '@mui/material';

import UserContact from '../UserContact/UserContact';

import './ConversationList.css';

const ConversationList = ({ users, onUserSelect }: any) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleUserChatClick = (user: any, index: number) => {
    onUserSelect(user);
    setSelectedIndex(index);
  };

  return (
    <List dense className='conversation-list'>
      {users?.map((user: any, index: number) => (
        <UserContact
          key={user.id}
          user={user}
          isSelected={selectedIndex === index}
          onUserSelect={() => handleUserChatClick(user, index)}
        />
      ))}
    </List>
  );
};

export default ConversationList;
