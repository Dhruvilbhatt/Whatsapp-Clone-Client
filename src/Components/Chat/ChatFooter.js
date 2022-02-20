import React from 'react';
import { Box, makeStyles, InputBase } from '@material-ui/core';
import { EmojiEmotionsOutlined, AttachFile, Mic, Search, EmojiEmotions } from '@material-ui/icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#202c33',
    height: 'calc(18vh - 62px)'
  },
  inputBase: {
    color: 'white',
    fontSize: 17,
    paddingRight: '0%',
    width: '100%',
    fontWeight: 100,
  },
  search: {
    position: 'relative',
    borderRadius: '9px',
    backgroundColor: '#2a3942',
    margin: '0px 20px 0px 10px',
    width: '100%',
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 20px'
  },
  mic: {
    color: '#8696a0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    '& >*': {
      fontSize: 30,
      cursor: 'pointer'
    }
  },
  icons: {
    color: '#8696a0',
    display: 'flex',
    '& >*': {
      fontSize: 30,
      margin: '0px 10px',
      cursor: 'pointer'
    },
    '& :nth-child(1)': {
      marginLeft: '15px'
    },
    '& :nth-child(2)': {
      transform: 'rotate(-140deg)'
    }
  }
})

function ChatFooter({ onEnterClick, setConversation, conversation }) {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.icons}>
        <EmojiEmotionsOutlined />
        <AttachFile />
      </Box>
      <Box className={classes.search}>
        <InputBase
          className={classes.inputBase}
          placeholder="Type a message"
          inputProps={{ 'aria-label': 'search' }}
          onKeyPress={(e)=>onEnterClick(e)}
          onChange={(e)=>setConversation(e.target.value)}
          value={conversation}
        />
      </Box>
      <Box className={classes.mic}>
        <Mic />
      </Box>
    </Box>
  )
}

export default ChatFooter