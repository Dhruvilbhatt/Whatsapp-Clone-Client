import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect, useState, useContext } from 'react';
import { getUsers } from '../../Service/api';
import Conversation from './Conversation';
import { AccountContext } from '../../Context/AccountProvider';

const useStyles = makeStyles({
    box: {
        borderTop: '1.5px solid rgba(128,128,128, 0.14)',
        overflow: 'overlay'
    }
})


function Conversations({ searchText }) {
    const [usersState, setUsersState] = useState([]);
    const { account, setActiveUsers, socket } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            const users_data = await getUsers();
            const filtered_users_data = users_data.filter(data => data.name.toLowerCase().includes(searchText.toLowerCase()));
            setUsersState(filtered_users_data);
        }
        fetchData();
    }, [searchText])

    useEffect(() => {
        socket.current.on('getUsers', active_users => {
            setActiveUsers(active_users);
        })
    }, [account])

    const classes = useStyles();

    return <Box className={classes.box}>
        {
            usersState.map(user => (
                account.googleId !== user.googleId &&
                <Conversation user={user} key={user.googleId} />
            ))
        }
    </Box>;
}

export default Conversations;
