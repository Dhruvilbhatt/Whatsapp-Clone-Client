import React, { useContext } from 'react';
import { Box, makeStyles } from '@material-ui/core'
import { AccountContext } from '../../Context/AccountProvider';

const useStyles = makeStyles({
  dp: {
    height: '36%',
    display: 'flex',
    justifyContent: 'center',
    padding: '32px 0px'
  },
  picture: {
    height: 200,
    width: 200,
    borderRadius: '50%'
  }
})

function DrawerDP() {
  const classes = useStyles();
  const { account } = useContext(AccountContext);

  return <Box className={classes.dp}>
    <img src={account.imageUrl} alt='dp' className={classes.picture} />
  </Box>;
}

export default DrawerDP;
