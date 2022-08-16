import React, { useState } from 'react';
import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { TOOLBAR_HEIGHT } from '../components/AppBar';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';

const Container = styled(MuiContainer)(() => ({
    display: "flex",
    alignItems: "center",
    paddingTop: "3em",
    height: `calc(100vh - ${TOOLBAR_HEIGHT})`,
    flexDirection: "column",
    gap: "10px",
}));

export const Search = () => {
    const [query, setQuery] = useState<string>("")


    return <Container>
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
        <Button variant="outlined">Search</Button>
    </Container>;
}
export default Search
