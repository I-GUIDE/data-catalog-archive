import Container, { ContainerProps } from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import { SearchResourceResult } from "../graphql/queries";
import formatCreators from "../utilities/formatCreator";
import formatBytes from "../utilities/humanReadableByteSize";
import timeSince from "../utilities/timeSince";
import formatNFiles from "../utilities/formatNFiles";

export interface Props {
    props?: SearchResourceResult
    containerProps?: ContainerProps
}

export function Resource(props?: Props) {
    // TODO: instead of passing state from <Link/>, use SearchParams to determine the resource id
    // and query here for the information needed.
    let { state } = useLocation()

    if ((!props || !props.props) && (!state)) return null

    // const { title, creators, abstract, created, nFiles, size } = props.props
    const { title, creators, abstract, created, nFiles, size } = state as SearchResourceResult
    const creationDate = created ? new Date(created.slice(0, 10)) : undefined
    const timeSinceCreated = creationDate ? timeSince(creationDate) : undefined

    // @ts-ignore
    const formattedCreators = creators ? formatCreators(creators, creators.length) : ""
    const formattedSize = formatBytes(size, 2)



    // title
    // abstract
    // creators : name & organization
    // created :
    // modified
    // rights: rightsStatement &  URL
    // URL: derive from id
    // download link

    // add published badge
    // add last updated
    // 

    return (
        // <Container {...props.containerProps}>
        <Container >
            <h1>{title}</h1>
            <h4>{formattedCreators}</h4>
            <Typography variant="body2">
                Uploaded: {`${timeSinceCreated} ago`} | {formatNFiles(nFiles)}(size: {formattedSize})
            </Typography>
            <h2>Abstract</h2>
            <section>{abstract}</section>

        </Container>
    )
}

export default Resource
