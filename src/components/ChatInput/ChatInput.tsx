import SendIcon from '@mui/icons-material/Send';

import Button from '../common/Button/Button';
import Input from '../common/Input/Input';

import './ChatInput.css';

const ChatInput = ({
  newMessage,
  setNewMessage,
  onSendNewMessage,
  maxRows = 4,
}: any) => {
  return (
    <div className='text-area-container'>
      <div className='internal-container'>
        <Input
          className='text-area'
          placeholder='Write here...'
          multiline
          maxRows={maxRows}
          value={newMessage}
          onChange={(e: any) => setNewMessage(e.target.value)}
        />
        <Button
          className='send-button'
          isIconButton
          disabled={!newMessage?.length}
          onClick={onSendNewMessage}
        >
          <SendIcon sx={{ color: newMessage?.length ? 'green' : 'gray' }} />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
