import { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { updateMessageList } from '../../redux/slices/message-list';
import { postMessage } from '../../redux/slices/create-message';

import ChatArea from '../ChatArea/ChatArea';
import GeneralError from '../GeneralError/GeneralError';
import Progress from '../common/Progress/Progress';

const RightContent = () => {
  const { data, isLoading, hasError } = useAppSelector(
    (state) => state.messages
  );
  const { selectedUser } = useAppSelector((state) => state.selectedUser);
  const { lastMessage } = useAppSelector((state) => state.lastMessage);
  const userID = localStorage.getItem('userID');
  const dispatch = useAppDispatch();
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (lastMessage?.id) {
      dispatch(updateMessageList(lastMessage));
    }
  }, [lastMessage]);

  const onSendNewMessage = () => {
    dispatch(
      postMessage({
        conversationID: selectedUser.id,
        text: newMessage,
      })
    );
    setNewMessage('');
  };

  if (isLoading) return <Progress color='success' />;
  if (hasError) return <GeneralError />;

  if (!data?.length) {
    return (
      <p>
        {selectedUser?.name ? 'Say Hi 👋🏼' : 'Select a user to start chatting'}
      </p>
    );
  }

  return (
    <ChatArea
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      chatData={data}
      userID={userID}
      onSendNewMessage={onSendNewMessage}
      selectedUser={selectedUser}
    />
  );
};

export default RightContent;
