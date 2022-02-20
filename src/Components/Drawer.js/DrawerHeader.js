import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const useStyles = makeStyles({
    profile: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        height: '16%',
        paddingTop: '10%',
        paddingLeft: '6%',
        background: '#2a3942',
        '& >*': {
            marginRight: '30px',
            fontSize: '21px',
            fontWeight: 200
        },
        '& :nth-child(1)': {
            fontSize: '26px'
        }
    },
    arrow: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

function DrawerHeader(props) {
    const classes = useStyles();

    return <Box className={classes.profile}>
        <ArrowBack onClick={()=>props.setOpen(false)} className={classes.arrow}/>
        <Typography>Profile</Typography>
    </Box>;
}

export default DrawerHeader;
