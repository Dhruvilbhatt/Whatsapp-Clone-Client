import React, { useState, useContext } from 'react';
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';
import { GoogleLogout } from 'react-google-login';
import { clientID } from '../../Constants';
import { AccountContext } from '../../Context/AccountProvider';
import { UserContext } from '../../Context/UserProvider';

const useStyles = makeStyles({
    headerMenu: {
        position: 'relative',
        paddingRight: 20
    },
    menuIcons: {
        '& >*': { 
        minWidth: '100px',    
        padding: '15px 24px 5px 24px',
        color: '#4A4A4A'
        }
    },
    logout: {
        boxShadow: 'none !important'
    },
    moreVert: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

function HeaderMenu(props) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const {setAccount} = useContext(AccountContext);
    const {setUserChat} = useContext(UserContext);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false)
    }

    const onLogoutSuccess = () => {
        setAccount();
        setUserChat({});
    }

    return <>
        <MoreVert onClick={handleClick} className={classes.moreVert}/>
        <Menu
            anchorEl={open}
            open={Boolean(open)}
            onClose={handleClose}
            className={classes.menuIcons}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
        >
            <MenuItem onClick={handleClose} onClick={()=>{props.setOpen(true); handleClose()}}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>
                <GoogleLogout
                    clientId={clientID}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                    className={classes.logout}
                />
            </MenuItem>
        </Menu>
    </>;
}

export default HeaderMenu;