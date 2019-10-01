import React from "react";
import Link from "next/Link";

const Home = () => (
  <div>
    <p>Home</p>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
  </div>
);

export default Home;
