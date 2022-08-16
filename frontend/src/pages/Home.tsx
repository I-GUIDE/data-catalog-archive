import MuiBox from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Box = styled(MuiBox)(({ theme }) => ({
    display: "flex",
    width: "100%",
    gap: "20px",
    flexWrap: "wrap"
}));

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: (theme.spacing(1), 0),
    textAlign: "start",
    color: theme.palette.text.primary,
    flexBasis: "600px",
}));

const H1 = styled("h1")(({ theme }) => ({
    textTransform: "uppercase",
    textDecoration: "underline #64863b",
    textDecorationThickness: "3px",
    textUnderlineOffset: "3px",
    fontSize: "2.5rem",
    textAlign: "center",
}));

const IFrame = styled("iframe")(() => ({
    width: "640px",
    height: "360px",
    flexBasis: "578px"
}));

export function Home() {
    return (
        <>
            <H1>We are I-Guide</H1>
            <Box>
                <IFrame src="https://mediaspace.illinois.edu/embed/secure/iframe/entryId/1_ebqgma2n/uiConfId/26883701" />
                <Item elevation={0}>The National Science Foundation (NSF) Institute for Geospatial Understanding
                    through an Integrative Discovery Environment (I-GUIDE) aims to transform geospatial
                    data-intensive sciences through integration of AI and cyberGIS, reproducible
                    data-intensive analytics and modeling, FAIR (Findable, Accessible, Interoperable, and
                    Reusable) data principles, and innovative education and workforce development programs.
                    This transformation catalyzes new convergence science necessary to drive advances across
                    many fields ranging from computer, data and information sciences to atmospheric
                    sciences, ecology, economics, environmental science and engineering, human-environment
                    and geographical sciences, hydrology and water sciences, industrial engineering,
                    sociology, and statistics. Through synergistic advances of these fields I-GUIDE is
                    empowering diverse communities to produce data-intensive solutions to society's
                    resilience and sustainability challenges.
                </Item>
            </Box>
        </>
    );
}

export default Home
