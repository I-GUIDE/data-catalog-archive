import React from 'react'
import Code from '@mui/icons-material/Code';
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import TableChart from '@mui/icons-material/TableChart';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import Toolbar from "@mui/material/Toolbar";
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

interface ToolbarItem {
    text: string
    icon: typeof SvgIcon
    link: string
}

const ToolbarItems: ToolbarItem[] = [
    { text: 'Home', icon: ExploreIcon, link: "/" },
    { text: 'Search', icon: SearchIcon, link: "/search" },
    { text: 'Datasets', icon: TableChart, link: "/datasets" },
    { text: 'Notebooks', icon: Code, link: "/notebooks" }
]

const drawerWidth = 240;
interface Props {
    height: string
}

const Drawer = styled(MuiDrawer)(() => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
}));


export default function PermanentDrawerLeft({ height }: Props) {
    return (
        <Drawer variant="permanent" anchor="left">
            <Toolbar sx={{ height: height }} />
            <Divider />
            <List>
                {/* {ToolbarItems.map((props) => ( */}
                {ToolbarItems.map(({ text, link, icon: Icon }) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton LinkComponent={Link} href={link}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer >
    );
}

const MenuItem = ({ text, icon: Icon }: ToolbarItem) => {
    return <ListItemButton>
        <ListItemIcon>
            <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
    </ListItemButton>;
}

