import React, { createContext, useState } from 'react'

export const UserContext = createContext(null);

function UserProvider({children}) {
    const [userChat, setUserChat] = useState({});

    return (
        <UserContext.Provider value={{
            userChat,
            setUserChat
        }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider