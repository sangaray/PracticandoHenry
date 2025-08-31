import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Bienvenido a MiTienda.com</h1>
        <p>Tu destino número uno para compras en línea</p>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Ofertas Especiales</h2>
          <p>
            ¡Descubre nuestras increíbles ofertas en una amplia gama de
            productos!
          </p>
          <button className={styles.button}>Explorar Ofertas</button>
        </section>
        <section className={styles.section}>
          <div className={styles.feature}>
            <h3>Envío Gratuito</h3>
            <p>En todos los pedidos superiores a $50</p>
          </div>
          <div className={styles.feature}>
            <h3>Devoluciones sin Complicaciones</h3>
            <p>¡Garantía de devolución del dinero!</p>
          </div>
          <div className={styles.feature}>
            <h3>Atención al Cliente 24/7</h3>
            <p>Nuestro equipo está aquí para ayudarte en cualquier momento</p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 MiTienda.com - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

