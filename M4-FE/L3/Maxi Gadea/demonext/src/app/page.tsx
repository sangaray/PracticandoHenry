"use client";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import HomeView from "@/views/Home/Home";
import Button from "@/components/CustomButton/Button";
import { useState } from "react";

export default function Home() {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className={styles.page}>
      Soy el page por defecto, estoy en la ruta "/".
      <Button disabled={true}>Login</Button>
      <Navbar />
      <HomeView />
    </div>
  );
}

