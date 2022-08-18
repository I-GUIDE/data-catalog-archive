import React, { useState } from 'react';
import MuiContainer from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { TOOLBAR_HEIGHT } from '../components/AppBar';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { useSearch } from '../graphql/queries';
import WideSearchListing from '../components/WideSearchListing';
import { useSearchParams, } from "react-router-dom"
import createSlug from '../utilities/createSlug';

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
    // number of search results returned should be a power of 4 for layout purposes
    const { results, useQuery: queryFn } = useSearch(48)
    const [_, setSearchParams] = useSearchParams()

    const handleQuery = () => {
        // empty string dont query
        if (!query.length) return
        const slug = createSlug(query)
        setSearchParams({ q: slug })
        queryFn(query)
    }

    function handleTextFieldEnterKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.code === "Enter") {
            handleQuery()
        }
    }

    return <Container>
        <TextField
            id="search-input"
            placeholder="aging dams"
            onChange={q => setQuery(q.target.value)
            }
            onKeyDown={handleTextFieldEnterKeydown}
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
        <Button variant="outlined" onClick={handleQuery}>Search</Button>
        {results && <WideSearchListing results={results} />}
    </Container>;
}
export default Search
