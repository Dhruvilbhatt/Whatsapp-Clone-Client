import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UserProvider';
import { Box, makeStyles } from '@material-ui/core';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { AccountContext } from '../../Context/AccountProvider';
import { getConversation, setMessage } from '../../Service/api';
import { ConversationContext } from '../../Context/ConversationProvider';

function ChatBox() {
  const { account, socket, sendMessageFlag, setSendMessageFlag } = useContext(AccountContext);
  const { userChat } = useContext(UserContext);
  const { IdConversation } = useContext(ConversationContext);
  const [conversation, setConversation] = useState('');
  const [messages, setMessages] = useState();

  const onEnterClick = async (event) => {

    if (conversation === '')
      return;

    if (event.keyCode == 13 || event.which == 13)
    {
      const converse_data = {
        conversationId: IdConversation,
        senderId: account.googleId,
        text: conversation
      }
      
      socket.current.emit('sendMessage', {
        senderId: account.googleId,
        receiverId: userChat.googleId,
        message: conversation
      })

      await setMessage(converse_data);

      const message_data = {
        conversationId: IdConversation,
        senderId: account.googleId,
        text: conversation,
        createdAt: Date.now()
      }
      setMessages(prev => [...prev, message_data]);
      setConversation('');
      setSendMessageFlag(!sendMessageFlag);
      console.log(sendMessageFlag);
    }
  }

  return (
    <Box >
      <ChatHeader />
      <ChatBody messages = {messages} setMessages = {setMessages}/>
      <ChatFooter onEnterClick={onEnterClick} setConversation={setConversation} conversation={conversation}/>
    </Box>
  )
}

export default ChatBox