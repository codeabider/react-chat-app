import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from '@mui/material';

import { getDate } from '../../utils/getDate';

import './UserContact.css';

const UserContact = ({ user, isSelected, onUserSelect }: any) => {
  return (
    <div>
      <ListItem disablePadding alignItems='flex-start'>
        <ListItemButton
          selected={isSelected}
          onClick={onUserSelect}
          classes={{ selected: 'test' }}
        >
          <ListItemAvatar>
            <Avatar alt={user.name} src='/static/images/avatar/1.jpg' />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={<sub>{'Last seen: ' + getDate(user.last_seen_at)}</sub>}
          />
        </ListItemButton>
      </ListItem>
      <Divider variant='inset' component='li' />
    </div>
  );
};

export default UserContact;
