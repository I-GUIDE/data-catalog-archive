import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { TOOLBAR_HEIGHT } from "../components/AppBar";
import Container from "../components/Container";
import ResourceCard from "../components/ResourceCard";
import { useGetResources, useSearch } from '../graphql/queries';
import "./Datasets.css";

interface SearchProps {
    // query: string
    // setQuery: React.Dispatch<React.SetStateAction<string>>
    // doQuery: () => void
    queryFn: (term: string, limit?: number) => void
}

// TODO: abstract and generalize in the future
const Search = React.memo(({ queryFn }: SearchProps) => {
    const [query, setQuery] = useState<string>("")

    const handleQuery = () => {
        // empty string dont query
        if (!query.length) return
        queryFn(query)
    }

    function handleTextFieldEnterKeydown(event: React.KeyboardEvent<HTMLDivElement>) {
        if (event.code === "Enter") {
            handleQuery()
        }
    }

    return <Container sx={{
        flexDirection: "row", alignItems: "center", justifyContent: "center",
        marginBottom: "1em",
        height: "auto"
    }}>
        <TextField
            id="search-input"
            placeholder="aging dams"
            onChange={q => setQuery(q.target.value)
            }
            onKeyDown={handleTextFieldEnterKeydown}
            sx={{
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
    </Container>;
})

const NoTopMarginContainer = styled(Container)(() => ({
    paddingTop: "0em",
    height: "auto"
}))


// css defined in Discover.css. Media queries required
export const Datasets = () => {
    const { results, loading } = useGetResources(24)

    // number of search results returned should be a power of 4 for layout purposes
    const { results: searchResults, loading: searchLoading, useQuery } = useSearch(48)

    if (loading || searchLoading) return <NoTopMarginContainer>
        <Search queryFn={useQuery} />
        <CircularProgress />
    </NoTopMarginContainer>

    if (searchResults) return <NoTopMarginContainer>
        <Search queryFn={useQuery} />
        <NoTopMarginContainer id="discover-container">
            {
                searchResults?.map((props, idx) => {
                    return <ResourceCard props={{ ...props }} cardProps={{ style: { height: "100%" }, key: props.id }} />
                })
            }
        </NoTopMarginContainer >
    </NoTopMarginContainer>

    return <NoTopMarginContainer>
        <Search queryFn={useQuery} />
        <NoTopMarginContainer id="discover-container">
            {
                results?.map((props, idx) => {
                    {/* id will change once we switch to new db collection */ }
                    return <Link to={`../holdings/${props.id?.slice(props.id.length - 32)}`} state={props} style={{ textDecoration: 'none', height: "100%" }} key={props.id}>
                        <ResourceCard props={{ ...props }} cardProps={{ style: { height: "100%" } }} />
                    </Link>
                })
            }
        </NoTopMarginContainer >
    </NoTopMarginContainer >

}

export default Datasets
