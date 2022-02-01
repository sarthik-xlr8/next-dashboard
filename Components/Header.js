import React from "react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Popover,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SIDEBAR_COLLAPSED_WIDTH, SIDEBAR_WIDTH } from "../utils/constants";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const DashboardNavbarRoot = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  background: "linear-gradient(to right,#0575E6, #021B79)",
  boxShadow: theme.shadows[3],
  width: open
    ? `calc(100% - ${SIDEBAR_WIDTH}px)`
    : `calc(100% - ${SIDEBAR_COLLAPSED_WIDTH}px)`,
}));

export const Header = ({ sidebarOpen }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleAvatarMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <DashboardNavbarRoot open={sidebarOpen}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{ display: "flex", cursor: "pointer" }}
            onClick={handleAvatarClick}
          >
            <Typography>John Doe</Typography>
            <KeyboardArrowDownOutlinedIcon />
          </Box>
          <Popover
            id={!!anchorEl ? "simple-popover" : undefined}
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={handleAvatarMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <List sx={{}} component="nav" aria-label="mailbox folders">
              <NextLink href={"/profile"} passHref>
                <ListItem button>
                  <ListItemText primary="Your Profile" />
                </ListItem>
              </NextLink>
              <Divider />
              <ListItem button>
                <ListItemText sx={{ color: "red" }} primary="Logout" />
              </ListItem>
            </List>
          </Popover>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

export default Header;
