import React, { useEffect, useMemo, useRef, useState } from 'react';
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
    // number of search results returned should be a multiple of 4 for layout purposes
    const { results, useQuery: queryFn, loading, data } = useSearch(48)
    const [_, setSearchParams] = useSearchParams()
    const ref = useRef<HTMLDivElement | null>(null)

    const handleQuery = () => {
        // empty string dont query
        if (!query.length) return
        // spaces are quoted with a +
        setSearchParams({ q: query })
        queryFn(query)
    }

    // this should only happen when data starts loading or data is already available
    useEffect(() => {
        if (loading === false && !data) {
            return
        }
        ref.current?.style.setProperty("margin-top", "0px")
    }, [loading, data])


    function handleTextFieldEnterKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.code === "Enter") {
            handleQuery()
        }
    }

    return <Container>
        <TextField
            id="search-input"
            placeholder="aging dams"
            ref={ref}
            onChange={q => setQuery(q.target.value)
            }
            onKeyDown={handleTextFieldEnterKeydown}
            sx={{
                marginTop: `calc(20vh - ${TOOLBAR_HEIGHT})`,
                minWidth: "100px",
                width: "100%",
                maxWidth: "584px",
                // transition top margin to 0px. see above useEffect
                transition: "margin-top 250ms"
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
        {(results || loading) && <WideSearchListing results={results} />}
    </Container>;
}
export default Search
