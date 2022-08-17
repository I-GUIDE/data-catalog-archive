import ResourceCard from "../components/ResourceCard";
import { useGetResources } from '../graphql/queries';

import Container from "../components/Container";
import "./Discover.css"

export const Discover = () => {
    const { results } = useGetResources(24)

    if (results === undefined) return null

    // css defined in Discover.css. Media queries required
    return <Container id="discover-container">
        {
            results.map((props, idx) => {
                return <ResourceCard props={{ ...props }} cardProps={{ style: { height: "100%" }, key: props.id }} />
            })
        }
    </Container >

}

export default Discover
