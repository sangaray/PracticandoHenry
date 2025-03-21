import { useNavigate } from "react-router-dom";
import styles from "../styles/styles.module.css";
import { useEffect, useState } from "react";

export default function ErrorPage(props) {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timeDown = setTimeout(() => {
      if (countdown === 1) navigate("/home");
      setCountdown((countdown) => countdown - 1);
    }, 1000);

    return () => clearTimeout(timeDown);
  }, [countdown]);

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <hr />
      <h2>No hay nada en esta URL</h2>
      <img
        src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/820ad535-c310-4704-a9bc-eecf26bba444/daqjybe-4fa0f360-59e2-4346-8b26-b1dc86bf0a10.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgyMGFkNTM1LWMzMTAtNDcwNC1hOWJjLWVlY2YyNmJiYTQ0NFwvZGFxanliZS00ZmEwZjM2MC01OWUyLTQzNDYtOGIyNi1iMWRjODZiZjBhMTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jiKLh1llYKIR1g8cfTpfBAmWinL1k3iHlbIoiIYzMHo"
        alt="404 - Not Found"
      />
      <h3>Redirigiendo a Personajes en {countdown} segundos</h3>
    </div>
  );
}

