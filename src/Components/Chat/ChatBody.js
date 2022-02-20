import React, { useContext, useEffect, useState, useRef } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { getMessage } from '../../Service/api';
import { UserContext } from '../../Context/UserProvider';
import { ConversationContext } from '../../Context/ConversationProvider';
import MessageChat from './MessageChat';
import { AccountContext } from '../../Context/AccountProvider';

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
    height: '82vh',
    backgroundSize: '50%',
    paddingTop: 5,
    overflowY: 'scroll',
    overflowX: 'hidden'
  }
})

function ChatBody({ messages, setMessages }) {
  const classes = useStyles();
  const { userChat } = useContext(UserContext);
  const { IdConversation } = useContext(ConversationContext);
  const { socket, sendMessageFlag, setSendMessageFlag, account } = useContext(AccountContext);
  const scrollRef = useRef();

  useEffect(() => {
    if (!IdConversation)
      return;

    const getMessageDetails = async () => {
      let data = await getMessage(IdConversation);
      setMessages(data);
    }

    getMessageDetails();
  }, [IdConversation])

  useEffect(() => {
    socket.current.on('getMessage', data => {
      if (data.receiverId != account.googleId)
        return;

      const incomingMessage = {
        conversationId: IdConversation,
        senderId: data.senderId,
        text: data.message,
        createdAt: Date.now()
      }
      setMessages(prev => [...prev, incomingMessage]);
    })
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: 'smooth' });
  }, [messages])

  return (
    <Box className={classes.container} ref={scrollRef}>
      {
        messages &&
        messages.map(message => (
          <Box ref={scrollRef}>
            <MessageChat key={message.createdAt} message={message} />
          </Box>
        ))
      }
    </Box>
  )
}

export default ChatBody