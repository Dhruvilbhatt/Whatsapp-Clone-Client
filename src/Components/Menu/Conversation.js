import React, {useContext, useState} from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { UserContext } from '../../Context/UserProvider';
import { AccountContext } from '../../Context/AccountProvider';
import { setConversation, getConversation } from '../../Service/api';
import { ConversationContext } from '../../Context/ConversationProvider';

const useStyles= makeStyles({
    container: {
        display: 'flex',
        padding: '5px 5px',
        alignItems: 'center',
        padding: '13px 0px',
        cursor: 'pointer'
    },
    displayPic: {
        borderRadius: '50%',
        height: 50,
        width: 50,
        marginLeft: '10px'
    },
    text: {
        padding: '0px 0px 0px 14px',
        fontSize: 17,
        fontWeight: 50
    }
})

function Conversation({ user }) {
    const classes = useStyles();
    const { userChat, setUserChat } = useContext(UserContext);
    const { account } = useContext(AccountContext);
    const { setIdConversation } = useContext(ConversationContext);

    const UserConversation = async () => {
        setUserChat(user);
        await setConversation({senderId: account.googleId, receiverId: user.googleId});
        const converse = await getConversation({senderId: account.googleId, receiverId: user.googleId});
        setIdConversation(converse._id);
    }

  return (
    <Box className={classes.container} onClick={UserConversation}>
        <img src={user.imageUrl} referrerPolicy="no-referrer" alt='contact-dp' className={classes.displayPic} />
        <Typography className={classes.text}>{user.name}</Typography>
    </Box>
  )
}

export default Conversation