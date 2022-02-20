import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserProvider';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { MoreVert, Search } from '@material-ui/icons';
import { AccountContext } from '../../Context/AccountProvider';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    background: '#2a3942',
    height: 62
  },
  displayPic: {
    borderRadius: '50%',
    width: 40,
    height: 40,
    margin: '12px 17px'
  },
  chatInfo: {
    '& :nth-child(1)': {
      fontSize: 16,
      fontWeight: 700
    },
    '& :nth-child(2)': {
      fontSize: 14,
      fontWeight: 500,
      color: '#8696a0'
    }
  },
  icons: {
    marginLeft: 'auto',
    '& >*': {
      margin: '12px 10px',
      fontWeight: 900,
      fontSize: 28,
      color: '#aebac1',
      cursor: 'pointer'
    },
    '& :nth-child(2)': {
      marginRight: '12px'
    }
  }
})

function ChatHeader() {
  const { userChat } = useContext(UserContext);
  const { activeUsers } = useContext(AccountContext);
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <img src={userChat.imageUrl} alt='dp' className={classes.displayPic} />
      <Box className={classes.chatInfo}>
        <Typography>{userChat.name}</Typography>
        <Typography>{activeUsers?.some(user => user.userId === userChat.googleId) ? 'Online' : ''}</Typography>
      </Box>
      <Box className={classes.icons}>
        <Search />
        <MoreVert />
      </Box>
    </Box>
  )
}

export default ChatHeader