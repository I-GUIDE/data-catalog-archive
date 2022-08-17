import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { SearchResourcesResults } from "../graphql/queries";
import { Link } from "react-router-dom"
import SearchItem from "./SearchItem";

export interface Props {
    results: SearchResourcesResults
}

export function WideSearchListing({ results }: Props) {

    return <List>
        {
            results?.map((value, idx) => {
                return <ListItem key={idx.toString()}>
                    {/* id will change once we switch to new db collection */}
                    <Link to={`../holdings/${value.id?.slice(value.id.length - 32)}`} state={value}>
                        <SearchItem cardProps={{ sx: { width: "100%" } }} props={{ ...value }} />
                    </Link>
                </ListItem>
            })
        }
    </List>

}
export default WideSearchListing
