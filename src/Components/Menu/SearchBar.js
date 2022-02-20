import React, { useState } from 'react';
import { Box, InputBase, makeStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    inputBase: {
        color: 'white',
        fontSize: 16,
        paddingRight: '10%',
        width: '100%',
    },
    search: {
        position: 'relative',
        borderRadius: '7px',
        backgroundColor: '#2a3942',
        margin: '8px auto',
        width: '93%',
        minHeight: '40px',
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        marginRight: 27,
        marginLeft: 15,
        fontSize: 20,
    }
}))

export default function SearchBar({setSearchText}) {
    const classes = useStyles();

    return (
        <Box className={classes.search}>
            <Search className={classes.searchIcon}/>
            <InputBase
                className={classes.inputBase}
                placeholder="Search or start new chat"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e)=>{setSearchText(e.target.value)}}
            />
        </Box>
    );
}
