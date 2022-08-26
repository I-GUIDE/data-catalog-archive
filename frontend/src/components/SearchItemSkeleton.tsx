
import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

export interface Props {
    // default is "pulse"
    animation?: SkeletonProps["animation"]
    cardProps?: CardProps
}


export default function SearchItemSkeleton({ animation, cardProps }: Props) {
    return (
        <Card {...cardProps}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <Skeleton animation={animation} />
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                    <Skeleton animation={animation} />
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    <Skeleton animation={animation} />
                    <Skeleton animation={animation} />
                </Typography>
                <Typography variant="body2">
                    <Skeleton animation={animation} />
                </Typography>
            </CardContent>
        </Card >
    )
}
