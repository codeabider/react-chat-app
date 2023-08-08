import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchMessages } from '../../redux/slices/message-list';
import { updateSelectedUser } from '../../redux/slices/selected-user';
import { fetchUsers } from '../../redux/slices/user-list';

import ConversationList from '../ConversationList/ConversationList';
import GeneralError from '../GeneralError/GeneralError';
import Progress from '../common/Progress/Progress';

const LeftContent = () => {
  const { selectedUser } = useAppSelector((state) => state.selectedUser);
  const { data, isLoading, hasError } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (selectedUser?.id)
      dispatch(fetchMessages({ conversationID: selectedUser.id }));
  }, [selectedUser]);

  const handleUserSelect = (user: any) => {
    dispatch(fetchMessages({ conversationID: user.id }));
    dispatch(updateSelectedUser(user));
  };

  if (isLoading) return <Progress color='success' />;
  if (hasError) return <GeneralError />;

  return <ConversationList onUserSelect={handleUserSelect} users={data} />;
};

export default LeftContent;
