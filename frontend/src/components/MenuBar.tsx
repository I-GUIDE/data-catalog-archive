import React from "react";
import Code from "@mui/icons-material/Code";
import ExploreIcon from "@mui/icons-material/Explore";
import SearchIcon from "@mui/icons-material/Search";
import TableChart from "@mui/icons-material/TableChart";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { getUrl } from "../utilities/getUrl";

interface ToolbarItem {
  text: string;
  icon: typeof SvgIcon;
  link: string;
}

const ToolbarItems: ToolbarItem[] = [
  { text: "Home", icon: ExploreIcon, link: getUrl("/") },
  { text: "Search", icon: SearchIcon, link: getUrl("search") },
  { text: "Datasets", icon: TableChart, link: getUrl("datasets") },
  { text: "Notebooks", icon: Code, link: getUrl("notebooks") },
];

const drawerWidth = 240;
const mobileDrawerWidth = 52;
interface Props {
  height: string;
}

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  [theme.breakpoints.up("sm")]: {
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  },
  // mobile view
  [theme.breakpoints.down("sm")]: {
    "& .MuiDrawer-paper": {
      width: mobileDrawerWidth,
      boxSizing: "border-box",
    },
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
    </Drawer>
  );
}

const MenuItem = ({ text, icon: Icon }: ToolbarItem) => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};
