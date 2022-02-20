import React, { useState } from 'react';
import Conversations from './Conversations';
import Header from './Header';
import SearchBar from './SearchBar';
import { Box } from '@material-ui/core'

function Menu() {
    const [searchText, setSearchText] = useState('');

    return (<Box>
        <Header />
        <SearchBar setSearchText={setSearchText}/>
        <Conversations searchText={searchText} />
    </Box>);
}

export default Menu;
