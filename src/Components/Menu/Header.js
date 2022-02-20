import React, { useContext, useState } from 'react';
import { Box, makeStyles, Drawer } from '@material-ui/core';
import { AccountContext } from '../../Context/AccountProvider';
import { Chat } from '@material-ui/icons';
import { MoreVert } from '@material-ui/icons';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../Drawer.js/InfoDrawer';

const useStyles = makeStyles({
    header: {
        height: 62,
        background: '#2a3942',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 5
    },
    displayPic: {
        borderRadius: '50%',
        height: 41,
        width: 41,
        marginLeft: 10,
        marginTop: 0,
        '&:hover': {
            cursor: 'pointer'
        }
    },
    icons: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        '& >*': {
            marginLeft: 15,
            marginRight: 15,
            fontSize: 26,
            color: '#919191'
        }
    }
})

function Header() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { account } = useContext(AccountContext);
    const classes = useStyles();

    return <Box className={classes.header}>
        <img src={account.imageUrl} referrerPolicy="no-referrer" alt='display-picture' className={classes.displayPic} onClick={() => { setOpenDrawer(true) }} />
        <Box className={classes.icons}>
            <Chat />
            <HeaderMenu open={openDrawer} setOpen={setOpenDrawer}/>
        </Box>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
    </Box>;
}

export default Header;
