import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { SearchResourcesResults } from "../graphql/queries";
import { Link } from "react-router-dom";
import SearchItem from "./SearchItem";
import SearchItemSkeleton from "./SearchItemSkeleton";
import getUrl from "../utilities/getUrl";

export interface Props {
  results: SearchResourcesResults;
}

export function WideSearchListing({ results }: Props) {
  return (
    <List style={{ width: "100%" }}>
      {!results
        ? [...Array(10)].map((i) => {
            return (
              <ListItem key={i}>
                <SearchItemSkeleton
                  animation="pulse"
                  cardProps={{ style: { width: "100%" } }}
                />
              </ListItem>
            );
          })
        : results?.map((value, idx) => {
            return (
              <ListItem key={idx.toString()}>
                {/* id will change once we switch to new db collection */}
                <Link
                  to={getUrl(
                    `holdings/${value.id?.slice(value.id.length - 32)}`
                  )}
                  state={value}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <SearchItem
                    cardProps={{ sx: { width: "100%" } }}
                    props={{ ...value }}
                  />
                </Link>
              </ListItem>
            );
          })}
    </List>
  );
}
export default WideSearchListing;
