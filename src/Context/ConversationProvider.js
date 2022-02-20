import React, { createContext, useState } from 'react'

export const ConversationContext = createContext(null);

function ConversationProvider({children}) {
    const [IdConversation, setIdConversation] = useState('');

    return (
        <ConversationContext.Provider value={{
            IdConversation,
            setIdConversation
        }}>
            { children }
        </ConversationContext.Provider>
    )
}

export default ConversationProvider