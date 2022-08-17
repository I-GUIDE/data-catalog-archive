import { createOperation } from "@apollo/client/link/utils";
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { createPortal } from "react-dom";
import { createToken } from "typescript";
import { SearchResourceResult } from "../graphql/queries";
import { Geojson_Checksum_NormalizedCreator } from "../graphql/types";
import { formatBytes } from "../utilities/humanReadableByteSize"
import { timeSince } from "../utilities/timeSince"

export interface Props {
    props: SearchResourceResult
    cardProps?: CardProps
}

type CreatorName = Pick<Geojson_Checksum_NormalizedCreator, "name">

// attempt to format name as <fist> <last>. Will correct <last>, <first> to <first> <last>
function formatName(name: string | undefined | null): string {
    if (!name) {
        return ""
    }

    const commaIdx = name.indexOf(",")

    if (commaIdx !== -1 && commaIdx + 1 < createOperation.name.length) {
        return `${name.slice(commaIdx + 1)} ${name.slice(0, commaIdx)}`
    }

    return name
}

// returns comma separated list of creator names. tries to format names so they are <fist> <last>.
// if there are more creators than `limit`, the list of creators is truncated and et al., is suffixed.
function formatCreators(creators: CreatorName[], limit: number = 3): string {
    if (creators.length > limit) {
        return creators.slice(0, limit).map(value => formatName(value.name)).join(", ").concat(" et al.,")
    }

    return creators.map(value => formatName(value?.name)).join(", ")
}

export function ResourceCard({ props, cardProps }: Props) {
    const { title, creators, created, nFiles, size } = props

    const creationDate = created ? new Date(created.slice(0, 10)) : undefined
    const timeSinceCreated = creationDate ? timeSince(creationDate) : undefined
    // @ts-ignore
    const formattedCreators = creators ? formatCreators(creators) : ""

    return (
        <Card {...cardProps}>
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {formattedCreators}
                </Typography>
                <Typography variant="caption">
                    Uploaded: {`${timeSinceCreated} ago`} | {nFiles} files(size: {formatBytes(size, 2)})
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ResourceCard;
