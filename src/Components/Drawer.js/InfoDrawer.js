import React, { useState } from 'react';
import { Box, Drawer, makeStyles, Typography } from '@material-ui/core';
import DrawerHeader from './DrawerHeader'
import DrawerDP from './DrawerDP'
import DrawerName from './DrawerName';
import DrawerAbout from './DrawerAbout';

const useStyles = makeStyles({
    drawer: {
        backgroundColor: '#111b21',
        height: '100vh',
        width: '100%'
    },
    text: {
        //width: '100%',
        color: 'rgba(255, 255, 255, 0.40)',
        //padding: '10px 20px 28px 35px'
    }
})

function InfoDrawer(props) {
    const classes = useStyles();

    return <Drawer
        open={props.open}
        onClose={() => { props.setOpen(false) }}
    >
        <Box className={classes.drawer}>
            <DrawerHeader open={props.open} setOpen={props.setOpen} />
            <DrawerDP />
            <DrawerName />
            <Box className={classes.text}>
               
            </Box>
            <DrawerAbout />
        </Box>
    </Drawer>;
}

export default InfoDrawer;
