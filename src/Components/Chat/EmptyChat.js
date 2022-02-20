import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        backgroundColor: '#f8f9fa',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function EmptyChat() {
    const imageUrl = 'https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png';
    const classes = useStyles();

  return (
    <Box className={classes.container}>
        <img src={imageUrl} alt='empty-chat' />
    </Box>
  )
}

export default EmptyChat