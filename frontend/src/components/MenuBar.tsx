import Code from '@mui/icons-material/Code';
import ExploreIcon from '@mui/icons-material/Explore';
import SearchIcon from '@mui/icons-material/Search';
import TableChart from '@mui/icons-material/TableChart';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';
import Toolbar from '@mui/material/Toolbar';

interface ToolbarItem {
    text: string
    icon: typeof SvgIcon
}

const ToolbarItems: ToolbarItem[] = [
    { text: 'Home', icon: ExploreIcon },
    { text: 'Search', icon: SearchIcon },
    { text: 'Datasets', icon: TableChart },
    { text: 'Notebooks', icon: Code }
]

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {ToolbarItems.map(({ text, icon: Icon }, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
