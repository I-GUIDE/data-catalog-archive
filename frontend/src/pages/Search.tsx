import React, { useLayoutEffect, useState } from 'react';
import MuiPaper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { TOOLBAR_HEIGHT } from '../components/AppBar';
import InputAdornment from '@mui/material/InputAdornment';

const Paper = styled(Container)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "3em",
    height: `calc(100vh - ${TOOLBAR_HEIGHT})`,
    // maxWidth: "inherit",
    // width: "100%"
}));

export const Search = () => {
    const [query, setQuery] = useState<string>("")
    // const [height, setHeight] = 

    console.log(query)

    return <Paper>
        <TextField
            id="search-input"
            placeholder="aging dams"
            onChange={q => setQuery(q.target.value)
            }
            sx={{
                marginTop: `calc(20vh - ${TOOLBAR_HEIGHT})`,
                minWidth: "100px",
                width: "100%",
                maxWidth: "584px"
            }}
            InputProps={{
                sx: { borderRadius: "50px", height: "44px" },
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        >
        </TextField>
    </Paper>;
}
export default Search
