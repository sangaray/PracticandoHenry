import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <p>Home</p>
      </Link>
      <br />
      <Link href="/dashboard">
        <p>Dashboard</p>
      </Link>
    </nav>
  );
};

export default Navbar;
