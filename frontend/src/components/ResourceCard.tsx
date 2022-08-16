import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SearchResourceResult } from "../graphql/queries";
import { formatBytes } from "../utilities/humanReadableByteSize"

export interface Props {
    props: SearchResourceResult
    cardProps?: CardProps
}

export function ResourceCard({ props, cardProps }: Props) {
    const { title, creators, created, nFiles, size } = props

    return (
        <Card {...cardProps}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    {creators?.map(value => value?.name).join(", ")}
                </Typography>
                <Typography variant="body2">
                    Uploaded: {created?.slice(0, 10)} | {nFiles} files(size: {formatBytes(size, 2)})
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ResourceCard;
