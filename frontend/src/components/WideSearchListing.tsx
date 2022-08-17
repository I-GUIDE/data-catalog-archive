import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { SearchResourcesResults } from "../graphql/queries";
import SearchItem from "./SearchItem";

export interface Props {
    results: SearchResourcesResults
}

export function WideSearchListing({ results }: Props) {

    return <List>
        {
            results?.map((value, idx) => {
                return <ListItem key={idx.toString()}>
                    <SearchItem cardProps={{ sx: { width: "100%" } }} props={{ ...value }} />
                </ListItem>
            })
        }
    </List>

}
export default WideSearchListing
