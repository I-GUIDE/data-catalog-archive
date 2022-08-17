import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SearchResourceResult } from "../graphql/queries";
import formatCreators from "../utilities/formatCreator";
import formatBytes from "../utilities/humanReadableByteSize";
import timeSince from "../utilities/timeSince";
import truncateString from "../utilities/truncateString";

export interface Props {
    props: SearchResourceResult
    cardProps?: CardProps
}

const maxDescriptionLength = 250

export default function SearchItem({ props, cardProps }: Props) {
    const { title, creators, abstract, created, nFiles, size } = props
    const creationDate = created ? new Date(created.slice(0, 10)) : undefined
    const timeSinceCreated = creationDate ? timeSince(creationDate) : undefined

    // @ts-ignore
    const formattedCreators = creators ? formatCreators(creators) : ""
    const formattedSize = formatBytes(size, 2)
    const formattedAbstract = truncateString(abstract ?? "", maxDescriptionLength)

    return (
        <Card {...cardProps}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    {formattedCreators}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {formattedAbstract}
                </Typography>
                <Typography variant="body2">
                    Uploaded: {`${timeSinceCreated} ago`} | {nFiles} files(size: {formattedSize})
                </Typography>
            </CardContent>
        </Card>
    )
}
