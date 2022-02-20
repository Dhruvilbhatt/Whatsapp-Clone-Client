import React, { useState, createContext, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';

export const AccountContext = createContext(null);

function AccountProvider({children}) {
    const [account, setAccount] = useState();
    const [activeUsers, setActiveUsers] = useState();
    const [sendMessageFlag, setSendMessageFlag] = useState(false);
    const socket = useRef();

    useEffect(() => {
      socket.current = io('http://localhost:9000')
    }, [])
    

    return (<AccountContext.Provider value={{
        account,
        setAccount,
        socket,
        activeUsers,
        setActiveUsers,
        sendMessageFlag,
        setSendMessageFlag
    }}>
        {children}
    </AccountContext.Provider>);
}

export default AccountProvider;
