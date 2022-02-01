import React, { useMemo } from "react";
import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import {
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const ListItem = styled(MuiListItem, {
  shouldForwardProp: (prop) => prop !== "active" || prop !== "open",
})(({ theme, open, active }) => ({
  ...(active && {
    backgroundColor: open ? "#e8effd" : "",
    color: open ? "#3273fb" : "#fafafa",
    borderLeft: open ? "5px solid #3273fb" : "5px solid #fafafa",
    ".sidebar-nav-item-text": {
      span: {
        fontWeight: "bold",
      },
    },
  }),
  ...(!active && {
    color: open ? "#3273fb" : "#fafafa",
  }),
}));

const NavItem = ({ item, open }) => {
  const router = useRouter();
  const active = useMemo(
    () => (item.href ? router.pathname === item.href : false),
    [router.pathname, item.href]
  );

  return (
    <NextLink href={item.href} passHref>
      <ListItem button open={open} active={active}>
        <ListItemIcon>
          {<item.icon fontSize="small" className="sidebar-nav-item-icon" />}
        </ListItemIcon>
        <ListItemText className="sidebar-nav-item-text" primary={item.title} />
      </ListItem>
    </NextLink>
  );
};

export default NavItem;
