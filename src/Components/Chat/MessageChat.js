import React, { useContext } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';
import { AccountContext } from '../../Context/AccountProvider';
import { UserContext } from '../../Context/UserProvider';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        background: '#FFFFFF',
        width: 'fit-content',
        borderRadius: 10,
        padding: 5,
        margin: '2px 40px',
        marginBottom: 3,
        wordBreak: 'break-word',
        maxWidth: '60%'
    },
    messageText: {
        color: 'black',
        padding: '0px 20px 0px 5px',
        fontSize: 15
    },
    messageDate: {
        color: '#8696a0',
        fontSize: 9,
        marginTop: 'auto',
        wordBreak: 'keep-all',
        fontStyle: 'italic',
        paddingRight: 2
    },
    ownMessage: {
        display: 'flex',
        background: '#dcf8c6',
        width: 'fit-content',
        borderRadius: 10,
        padding: 5,
        margin: '0px 40px',
        marginLeft: 'auto',
        marginBottom: 3,
        wordBreak: 'break-word',
        maxWidth: '60%'
    },
    onLine: {
        color: '#8696a0',
        fontSize: 16,
        marginTop: 'auto',
        wordBreak: 'keep-all',
        fontStyle: 'italic',
    },
    offLine: {
        color: 'red',
        fontSize: 16,
        marginTop: 'auto',
        wordBreak: 'keep-all',
        fontStyle: 'italic',
        //paddingRight: 2
    }
})

function MessageChat({message}) {
    const classes = useStyles();
    const { account, activeUsers } = useContext(AccountContext);
    const { userChat } = useContext(UserContext);

    const dateFormatter = (date) => {
        return date < 10 ? '0' + date : date;
    }
    //console.log(message)

    return (
        <Box className={account.googleId ===  message.senderId ? classes.ownMessage : classes.container}>
            <Typography className={classes.messageText}>{message.text}</Typography>
            <Typography className={classes.messageDate}>{dateFormatter(new Date(message.createdAt).getHours())}:{dateFormatter(new Date(message.createdAt).getMinutes())}</Typography>
            {activeUsers?.some(user => user.userId === userChat.googleId) ? <CheckRounded className={classes.onLine}/> : <CheckRounded className={classes.offLine}/>}
        
        </Box>
    )
}

export default MessageChat