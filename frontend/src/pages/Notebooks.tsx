import SearchIcon from '@mui/icons-material/Search'
import { CircularProgress } from '@mui/material'
import Button from '@mui/material/Button'
import MuiContainer from '@mui/material/Container'
import InputAdornment from '@mui/material/InputAdornment'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { TOOLBAR_HEIGHT } from '../components/AppBar'
import WideSearchListing from '../components/WideSearchListing'
import { useGetResources } from '../graphql/queries'

const Container = styled(MuiContainer)(() => ({
    display: "flex",
    alignItems: "center",
    paddingTop: "3em",
    height: `calc(100vh - ${TOOLBAR_HEIGHT})`,
    flexDirection: "column",
    gap: "10px",
}));

// TODO: abstract and generalize in the future
const Search = () => {
    const [query, setQuery] = useState<string>("")

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

export default function Notebooks() {
    const { results, loading, error } = useGetResources()
    error ?? console.error(error)

    if (loading) return <CircularProgress />

    return <WideSearchListing results={results} />
}


