import { useAppSelector } from '../../redux/hooks';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatInput from '../ChatInput/ChatInput';

import { useEffect, useRef } from 'react';

import './ChatArea.css';

const ChatArea = ({
  newMessage,
  setNewMessage,
  onSendNewMessage,
  chatData,
  userID,
  selectedUser,
}: any) => {
  const { lastMessage } = useAppSelector((state) => state.lastMessage);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef?.current) {
      setTimeout(() => {
        sectionRef.current.scrollTo(0, sectionRef.current.scrollHeight);
      }, 0);
    }
  }, [lastMessage]);

  return (
    <div className='chat-container'>
      <div className='chat-section' ref={sectionRef}>
        {chatData?.map((message: any) => (
          <ChatMessage
            key={message.id}
            isSender={userID == message.user_id}
            message={message}
          />
        ))}
      </div>
      {selectedUser?.name && (
        <ChatInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          onSendNewMessage={onSendNewMessage}
        />
      )}
    </div>
  );
};

export default ChatArea;
