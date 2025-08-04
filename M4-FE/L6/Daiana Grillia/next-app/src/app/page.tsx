"use client";
import getData from "./services/getDataFetch";
import styles from "./page.module.css";

export default function Home() {
  const data = getData();

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

