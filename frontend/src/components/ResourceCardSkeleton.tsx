import Card, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton, { SkeletonProps } from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

export interface Props {
    animation: SkeletonProps["animation"]
    cardProps?: CardProps
}

export function ResourceCardSkeleton({ animation, cardProps }: Props) {

    return (
        <Card {...cardProps}>
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    <Skeleton animation={animation} />
                    <Skeleton animation={animation} />
                </Typography>
                <Typography gutterBottom variant="body2" component="div">
                    <Skeleton animation={animation} />
                </Typography>
                <Typography variant="caption">
                    <Skeleton animation={animation} />
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ResourceCardSkeleton;
