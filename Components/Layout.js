import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Header from "./Header";
import SideBar from "./SideBar";
import {
  HEADER_HEIGHT,
  SIDEBAR_COLLAPSED_WIDTH,
  SIDEBAR_WIDTH,
} from "../utils/constants";

const DashboardLayoutRoot = styled("div")(({ theme, open }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  marginTop: HEADER_HEIGHT,
  marginLeft: open ? SIDEBAR_WIDTH : SIDEBAR_COLLAPSED_WIDTH,
}));

const SidebarWrapper = styled("div")(({ theme }) => ({
  position: "relative",
}));

const openSidebarMixin = (theme) => ({
  left: SIDEBAR_WIDTH - 15, //15 is half of width of icon
  transition: theme.transitions.create("left", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ".sidebar-toggle-icon": {
    fill: "#ffffff",
  },
});
const closeSidebarMixin = (theme) => ({
  left: SIDEBAR_COLLAPSED_WIDTH - 15, //15 is half of width of icon
  transition: theme.transitions.create("left", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ".sidebar-toggle-icon": {
    fill: "#050d22",
  },
});

const DrawerTrigger = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "absolute",
  left: open ? SIDEBAR_WIDTH - 15 : SIDEBAR_COLLAPSED_WIDTH - 15, //15 is half of width of icon
  top: "100px",
  border: `1px solid ${open ? "#ffffff" : "#3273fb"}`,
  backgroundColor: `${open ? "#3273fb" : "#ffffff"}`,
  borderRadius: "50%",
  height: "30px",
  width: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1203,
  ...(open && { ...openSidebarMixin(theme) }),
  ...(!open && { ...closeSidebarMixin(theme) }),
}));

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Header sidebarOpen={sidebarOpen} />
      <SidebarWrapper>
        <SideBar
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          open={sidebarOpen}
        />
        <DrawerTrigger
          open={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <IconButton>
            {sidebarOpen ? (
              <KeyboardArrowLeft className="sidebar-toggle-icon" />
            ) : (
              <KeyboardArrowRight className="sidebar-toggle-icon" />
            )}
          </IconButton>
        </DrawerTrigger>
      </SidebarWrapper>
      <DashboardLayoutRoot open={sidebarOpen}>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
    </>
  );
};

export default Layout;
