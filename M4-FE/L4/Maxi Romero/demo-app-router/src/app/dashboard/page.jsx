import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link href="/dashboard/orders">
        <p>Go to orders</p>
      </Link>
      <p>Email: maxigadea2000@gmail.com</p>
      <p>Address: Posadas, Misiones</p>
    </div>
  );
};

export default Dashboard;
