import React, { useState, Fragment } from "react";
import Router from "next/Router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", url => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", url => {
  NProgress.done();
});
Router.events.on("routeChangeError", (err, url) => {
  NProgress.done();
});

import AppBar from "./AppBar";
import SideDrawer from "./SideDrawer";

const Header = props => {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(prevState => !prevState);
  const onClose = () => setOpen(false);

  return (
    <Fragment>
      <AppBar onToggle={onToggle} />
      <SideDrawer open={open} onToggle={onToggle} onClose={onClose} />
    </Fragment>
  );
};

export default Header;
