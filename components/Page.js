import React from "react";
import Meta from "./Meta";
// import Link from "next/Link";
import Header from "./Header";

const style = {
  fontSize: "4rem",
  marginLeft: "2rem",
  position: "relative",
  zIndex: 2,
  color: "white",
  backgroundColor: "red",
  textTransform: "uppercase",
  textDecoration: "none",
  padding: "0.5rem 1rem"
};

export default props => {
  return (
    <div>
      <Meta />
      <Header />
      {/*<Link>
        <div style={{ transform: "skew(-7deg)" }}>
          <a href="/" style={style}>
            Online Shop
          </a>
        </div>
      </Link>*/}
      {props.children}
    </div>
  );
};
