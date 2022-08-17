import ResourceCard from "../components/ResourceCard";
import { useGetResources } from '../graphql/queries';

import Container from "../components/Container";




export const Discover = () => {
    const { results } = useGetResources(24)

    if (results === undefined) return null

    return <Container sx={{ height: "auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        {
            results.map((props, idx) => {
                return <ResourceCard props={{ ...props }} cardProps={{ style: { height: "100%" }, key: props.id }} />
            })
        }
    </Container >

}

export default Discover
