import { useRouter } from "next/router";
import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import {
  Box,
  List,
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
  Drawer as MuiDrawer,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddchartIcon from "@mui/icons-material/Addchart";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { SIDEBAR_WIDTH } from "../utils/constants";
import Logo from "./Logo";
import NavItem from "./NavItem";

const items = [
  {
    href: "/",
    icon: HomeIcon,
    title: "Overview",
  },
  {
    href: "/integrations",
    icon: AddchartIcon,
    title: "Integrations",
  },
  {
    href: "/analytics",
    icon: LeaderboardOutlinedIcon,
    title: "Analytics",
  },
  {
    href: "/estimator",
    icon: CalculateOutlinedIcon,
    title: "Estimator",
  },
  {
    href: "/settings",
    icon: SettingsOutlinedIcon,
    title: "Settings",
  },
];

const openedMixin = (theme) => ({
  width: SIDEBAR_WIDTH,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  backgroundColor: "#ffffff",
  color: "#3273fb",
  ".sidebar-nav-item-icon": {
    fill: "#3273fb",
  },
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
  backgroundColor: "#050d22",
  color: "#ffffff",
  ".sidebar-nav-item-icon": {
    fill: "#ffffff",
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: SIDEBAR_WIDTH,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "relative",
  color: `${open ? "#3273fb" : "#ffffff"}`,
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      paddingTop: "30px",
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      paddingTop: "30px",
    },
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  width: "100%",
  ...theme.mixins.toolbar,
  span: {
    paddingLeft: "10px",
  },
}));

const ListItem = styled(MuiListItem, {
  shouldForwardProp: (prop) => prop !== "isSelected" || prop !== "open",
})(({ theme, open, isSelected }) => ({
  ...(isSelected && {
    backgroundColor: open ? "#e8effd" : "",
    color: open ? "#3273fb" : "#fafafa",
    borderLeft: open ? "5px solid #3273fb" : "5px solid #fafafa",
    ".sidebar-nav-item-text": {
      span: {
        fontWeight: "bold",
      },
    },
  }),
  ...(!isSelected && {
    color: open ? "#3273fb" : "#fafafa",
  }),
}));

const SideBar = ({ open }) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        height: "100%",
      }}
      className="sidebar-wrapper"
    >
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Logo fill={open ? "#3273fb" : "#ffffff"} height="60" />
          {open && <span>{"SYNATO"}</span>}
        </DrawerHeader>
        <List>
          {items.map((item, index) => (
            <NavItem open={open} item={item} key={index} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
