import React, {useContext} from 'react';
import { Box, makeStyles, Container, List, ListItem, Typography } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';
import { AccountContext } from '../../Context/AccountProvider';
import { clientID } from '../../Constants';
import { addUser } from '../../Service/api'

const useStyles = makeStyles({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxLogin: {
        display: 'flex'
    },
    leftComponent: {
        background: 'white',
        height: '60vh',
        width: 900,
        marginTop: 130,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 5,
        padding: '56px 0 56px 56px',
        display: 'flex'
    },
    typoTitle: {
        fontSize: 26,
        marginBottom: 25,
        paddingTop: 20,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif'
    },
    listLogin: {
        '& >*': {
            color: '#4a4a4a',
            fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
            fontSize: 18,
            marginBottom: 10
        }
    },
    qr: {
        marginLeft: 0,
        padding: '20px 0px 56px 0px'
    }
})

function Login() {
    const classes = useStyles();
    const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const {account, setAccount} = useContext(AccountContext)

    const onLoginSuccess = async (response) => {
        setAccount(response.profileObj);
        await addUser(response.profileObj);
    }

    const onLoginFailure = () => {
        console.log('Oops!!!')
    }

    return (<Container className={classes.container}>
        <Box className={classes.leftComponent} >
            <Box>
                <Typography className={classes.typoTitle}>To use Whatsapp on your computer:</Typography>
                <List className={classes.listLogin}>
                    <ListItem>1. Open Whatsapp on your phone</ListItem>
                    <ListItem>2. Tap Menu or setting and select Linked Devices</ListItem>
                    <ListItem>3. Point your phone to this screen and capture the code</ListItem>
                </List>
            </Box>
            <Box style={{ position: 'relative', margin: '0' }}>
                <img className={classes.qr} src={qrurl} alt='qr-code'/>
                <Box style={{ position: 'absolute', left: '45%', top: '45%' }}>
                    <GoogleLogin 
                        clientId={clientID}
                        buttonText=""
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}
                    />
                </Box>
            </Box>
        </Box>
    </Container >);
}

export default Login;
