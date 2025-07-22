import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Soy la ruta por defecto. Estoy en http://localhost:3000/</h1>
    </div>
  );
}

