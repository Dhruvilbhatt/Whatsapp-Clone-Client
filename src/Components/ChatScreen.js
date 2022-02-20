import React, { useContext, useEffect } from 'react';
import { AppBar, Box, makeStyles } from '@material-ui/core';
import { AccountContext } from '../Context/AccountProvider';
import { UserContext } from '../Context/UserProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './Menu/Menu';
import ChatBox from './Chat/ChatBox';
import EmptyChat from './Chat/EmptyChat';

const useStyles = makeStyles({
    whatsappScreen: {
        height: '100vh',
        background: '#111b21',
        display: 'flex',
        color: 'white'
    },
    leftComponent: {
        minWidth: 460
    },
    rightComponent: {
        borderLeft: '1.5px solid rgba(128,128,128, 0.14)',
        width: '70%'
    }
})


function ChatScreen() {
    const classes = useStyles();
    const { account, socket } = useContext(AccountContext);
    const { userChat } = useContext(UserContext);


    useEffect(() => {
        socket.current.emit('addUser', account.googleId);
    }, [])

    return (<CssBaseline><Box className={classes.whatsappScreen}>
        <Box className={classes.leftComponent}>
            <Menu />
        </Box>
        <Box className={classes.rightComponent}>
            {
                !(Object.keys(userChat).length === 0 && userChat.constructor === Object) ? <ChatBox /> : <EmptyChat />
            }
        </Box>
    </Box>
    </CssBaseline>);
}

export default ChatScreen;
