import React from "react";
import Link from "next/link";
import styles from "./../../app/page.module.css";

const TodosList = () => {
  return (
    <div className={styles.page}>
      <Link href="/todos/1">
        <label htmlFor="">TODO 1</label>
      </Link>
      <Link href="/todos/2">
        <label htmlFor="">TODO 2</label>
      </Link>
      <Link href="/todos/3">
        <label htmlFor="">TODO 3</label>
      </Link>
      <Link href="/todos/4">
        <label htmlFor="">TODO 4</label>
      </Link>
    </div>
  );
};

export default TodosList;
