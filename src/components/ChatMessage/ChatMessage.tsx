import { getDate } from '../../utils/getDate';

import './ChatMessage.css';

const ChatMessage = ({ isSender, message }: any) => {
  return (
    <div className={isSender ? 'box sender' : 'box'}>
      <p className={isSender ? 'bubble sender' : 'bubble'}>
        <span>{message.text}</span>
        <sub className='time'>{getDate(message.sent_at)}</sub>
      </p>
    </div>
  );
};

export default ChatMessage;
