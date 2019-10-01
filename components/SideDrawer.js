import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";

import Link from "next/Link";

export default props => {
  return (
    <Drawer variant="temporary" open={props.open} onClose={props.onClose}>
      <List>
        <ListItem button onClick={props.onClose}>
          <ListItemText>
            <Link href="/sell">
              <a>Item1</a>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={props.onClose}>
          <ListItemText>Item2</ListItemText>
        </ListItem>
        <ListItem button onClick={props.onClose}>
          <ListItemText>Item3</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};
