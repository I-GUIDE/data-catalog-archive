import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { SearchResourceResult } from "../graphql/queries";

// export interface Props {
//     title: string
//     description: string
//     authors: string[]
//     nFiles: number
//     uploadDate: string
//     size: string
//     cardProps?: CardProps
// }

export interface Props {
    props: SearchResourceResult
    cardProps?: CardProps
}

function truncateString(s: string, maxLength: number) {
    if (s.length > maxLength) {
        return s.slice(0, maxLength - 3) + "..."
    }
    return s

}

const maxDescriptionLength = 250

export default function SearchItem({ props, cardProps }: Props) {
    // const { title, description, authors, nFiles, uploadDate, size } = props
    const { title, creators, abstract, created, nFiles, size } = props
    console.log(props)

    return (
        <Card {...cardProps}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    {creators?.map(value => value?.name).join(", ")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {truncateString(abstract ?? "", maxDescriptionLength)}
                </Typography>
                <Typography variant="body2">
                    Uploaded: {created?.slice(0, 10)} | {nFiles} files(size: {size})
                </Typography>
            </CardContent>
        </Card>
    )
}


// export default function MediaCard() {
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//                 component="img"
//                 height="140"
//                 image="/static/images/cards/contemplative-reptile.jpg"
//                 alt="green iguana"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     Lizard
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                 </Typography>
//             </CardContent>
//             <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//             </CardActions>
//         </Card>
//     );
// }
