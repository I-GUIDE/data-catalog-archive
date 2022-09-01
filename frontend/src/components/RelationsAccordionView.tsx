import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';

export type Part = {
    id: string
    title?: string
}

export interface Props {
    parts?: Part[]
    isPartOf?: Part[]
}

export interface PartCardProps {
    info: Part
}

const PartCard = ({ info: { id, title } }: PartCardProps) => {
    const navigate = useNavigate()

    function handleNavigate(id: string) {
        id = handleMalformedId(id)
        // not the best way to handle this, but just don't navigate
        if (id === "") return
        navigate(`../${id}`)
    }

    // remove in future once db has been updated
    // handles case when id looks like:
    // Arctur, D., E. Boghici, D. Tarboton, D. Maidment, J. Bales, R. Idaszak, M. Seul, A. M. Castronova (2018). Hurricane Harvey 2017 Collection, HydroShare, https://doi.org/10.4211/hs.2836494ee75e43a9bfb647b37260e461
    // assumes that all HS resource id's are 32 characters long i.e. md5 length
    function handleMalformedId(id: string): string {
        if (id.length === 32) {
            return id
        }

        if (id.length > 32) {
            return id.slice(id.length - 32)
        }

        return ""
    }

    return <Card>
        <CardActionArea onClick={e => handleNavigate(e.currentTarget.id)} id={id}>
            <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                    {title ?? id}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

}

export const RelationsAccordionView = ({ parts, isPartOf }: Props) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Parts</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {parts?.map((item, idx) => <PartCard key={idx} info={item} />)}
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Is Part Of</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {isPartOf?.map((item, idx) => <PartCard key={idx} info={item} />)}
                </AccordionDetails>
            </Accordion>
        </div>
    )

}

export default RelationsAccordionView

