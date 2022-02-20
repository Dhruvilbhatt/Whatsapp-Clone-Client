import React, { useContext } from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { AccountContext } from '../../Context/AccountProvider';

const useStyles = makeStyles({
  container: {
    height: '15%',
    '& :nth-child(1)': {
      fontSize: 15,
      color: '#009688',
      paddingLeft: 35,
      paddingTop: 20,
    },
    '& :nth-child(2)': {
      fontSize: 18,
      marginTop: '20px',
      color: '#FFFFFF',
      paddingLeft: 35,
    },
  }
})

function DrawerAbout() {
  const { account } = useContext(AccountContext);
  const classes = useStyles();

  return <Box className={classes.container}>
    <Typography>About</Typography>
    <Typography>.</Typography>
  </Box>;
}

export default DrawerAbout;
