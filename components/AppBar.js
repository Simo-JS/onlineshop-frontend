import React from "react";
import { AppBar, IconButton, Typography, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={props.onToggle} edge="start" color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Online Shop
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
