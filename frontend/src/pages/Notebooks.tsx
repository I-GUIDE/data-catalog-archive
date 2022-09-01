import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import React from "react";
import { Link } from "react-router-dom";

import Container from "../components/Container";
import ResourceCard from "../components/ResourceCard";
import ResourceCardSkeleton from "../components/ResourceCardSkeleton";
import { useSearch } from "../graphql/queries";
import {
  useGetNotebookResources,
  useSearchNotebookResources,
} from "../graphql/useGetNotebookResources";
import "./Datasets.css";
import getUrl from "../utilities/getUrl";

interface SearchProps {
  // query: string
  // setQuery: React.Dispatch<React.SetStateAction<string>>
  // doQuery: () => void
  queryFn: (term: string, limit?: number) => void;
}

// TODO: abstract and generalize in the future
const Search = React.memo(({ queryFn }: SearchProps) => {
  const [query, setQuery] = useState<string>("");

  const handleQuery = () => {
    // empty string dont query
    if (!query.length) return;
    queryFn(query);
  };

  function handleTextFieldEnterKeydown(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    if (event.code === "Enter") {
      handleQuery();
    }
  }

  return (
    <Container
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "1em",
        height: "auto",
      }}
    >
      <TextField
        id="search-input"
        placeholder="aging dams"
        onChange={(q) => setQuery(q.target.value)}
        onKeyDown={handleTextFieldEnterKeydown}
        sx={{
          minWidth: "100px",
          width: "100%",
          maxWidth: "584px",
        }}
        InputProps={{
          sx: { borderRadius: "50px", height: "44px" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      ></TextField>
      <Button variant="outlined" onClick={handleQuery}>
        Search
      </Button>
    </Container>
  );
});

const NoTopMarginContainer = styled(Container)(() => ({
  paddingTop: "0em",
  height: "auto",
}));

// css defined in Discover.css. Media queries required
export const Notebooks = () => {
  const { results, loading } = useGetNotebookResources(24);

  const {
    results: searchResults,
    loading: searchLoading,
    useQuery,
  } = useSearchNotebookResources(48);

  if (loading || searchLoading)
    return (
      <NoTopMarginContainer>
        <Search queryFn={useQuery} />
        <NoTopMarginContainer id="discover-container">
          {
            // should be a multiple of 4 to respect the grid layout
            [...Array(4 * 6)].map((idx) => {
              return <ResourceCardSkeleton key={idx} />;
            })
          }
        </NoTopMarginContainer>
      </NoTopMarginContainer>
    );

  if (searchResults)
    return (
      <NoTopMarginContainer>
        <Search queryFn={useQuery} />
        <NoTopMarginContainer id="discover-container">
          {searchResults?.map((props, idx) => {
            return (
              <Link
                to={getUrl(`holdings/${props.id?.slice(props.id.length - 32)}`)}
                state={props}
                style={{ textDecoration: "none", height: "100%" }}
                key={props.id}
              >
                <ResourceCard
                  props={{ ...props }}
                  cardProps={{ style: { height: "100%" }, key: props.id }}
                />
              </Link>
            );
          })}
        </NoTopMarginContainer>
      </NoTopMarginContainer>
    );

  return (
    <NoTopMarginContainer>
      <Search queryFn={useQuery} />
      <NoTopMarginContainer id="discover-container">
        {results?.map((props, idx) => {
          {
            /* id will change once we switch to new db collection */
          }
          return (
            <Link
              to={getUrl(`holdings/${props.id?.slice(props.id.length - 32)}`)}
              state={props}
              style={{ textDecoration: "none", height: "100%" }}
              key={props.id}
            >
              <ResourceCard
                props={{ ...props }}
                cardProps={{ style: { height: "100%" } }}
              />
            </Link>
          );
        })}
      </NoTopMarginContainer>
    </NoTopMarginContainer>
  );
};

export default Notebooks;
