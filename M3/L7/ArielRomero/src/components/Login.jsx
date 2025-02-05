import styles from "./Login.module.css";
export function Login() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Componente Login</h2>
      <form>
        <label>Usuario:</label>
        <input type="text" />
        <br />

        <label>Contraseña:</label>
        <input type="text" />
        <br />
      </form>
    </div>
  );
}
