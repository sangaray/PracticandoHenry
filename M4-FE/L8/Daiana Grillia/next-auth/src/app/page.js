"use client";

import { useState } from "react";
import AuthForm from "./components/AuthForm/AuthForm";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import styles from "./page.module.css";

export default function Home() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  return (
    <main className={styles.page}>
      <div>
        <Navbar />
        {token ? <Products /> : <AuthForm token={token} setToken={setToken} />}
      </div>
    </main>
  );
}

