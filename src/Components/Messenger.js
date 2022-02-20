import React, { useContext } from 'react';
import { AppBar, Box, makeStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './Account/Login';
import { AccountContext } from '../Context/AccountProvider';
import ChatScreen from './ChatScreen';

const useStyles = makeStyles({
    appbar: {
        height: 222,
        backgroundColor: '#00a884',
        boxShadow: 'none',
        position: 'static'
    },
    box: {
        height: '100vh',
        background: '#0a1014',
    }
})

export default function Messenger() {
    const classes = useStyles()
    const { account } = useContext(AccountContext)

    return (
        <>
            {account ? <ChatScreen /> : (<Box className={classes.box}>
                <AppBar className={classes.appbar}>
                    <CssBaseline />
                    <Login />
                </AppBar>
            </Box>)}
        </>
    );
}
