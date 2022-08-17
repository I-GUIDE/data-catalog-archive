import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SearchResourceResult } from "../graphql/queries";
import { formatBytes } from "../utilities/humanReadableByteSize"
import { timeSince } from "../utilities/timeSince"

export interface Props {
    props: SearchResourceResult
    cardProps?: CardProps
}

export function ResourceCard({ props, cardProps }: Props) {
    const { title, creators, created, nFiles, size } = props

    const creationDate = created ? new Date(created.slice(0, 10)) : undefined
    const timeSinceCreated = creationDate ? timeSince(creationDate) : undefined

    return (
        <Card {...cardProps}>
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    {creators?.map(value => value?.name).join(", ")}
                </Typography>
                <Typography variant="caption">
                    Uploaded: {`${timeSinceCreated} ago`} | {nFiles} files(size: {formatBytes(size, 2)})
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ResourceCard;
