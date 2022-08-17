import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

import { TOOLBAR_HEIGHT } from "../components/AppBar";
import Container from "../components/Container";
import ResourceCard from "../components/ResourceCard";
import { useGetResources } from '../graphql/queries';
import "./Discover.css";

interface SearchProps {
    query: string
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

// TODO: abstract and generalize in the future
const Search = ({ query, setQuery }: SearchProps) => {

    return <Container>
        <TextField
            id="search-input"
            placeholder="aging dams"
            onChange={q => setQuery(q.target.value)
            }
            sx={{
                marginTop: `calc(5vh - ${TOOLBAR_HEIGHT})`,
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

export const Discover = () => {
    const { results, loading } = useGetResources(24)
    const [query, setQuery] = useState("")

    if (loading) return <Container>
        <Search query={query} setQuery={setQuery} />
        <CircularProgress />
    </Container>

    // css defined in Discover.css. Media queries required
    return <Container id="discover-container">
        <Search query={query} setQuery={setQuery} />
        {
            results?.map((props, idx) => {
                return <ResourceCard props={{ ...props }} cardProps={{ style: { height: "100%" }, key: props.id }} />
            })
        }
    </Container >

}

export default Discover
