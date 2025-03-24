import { useToggle } from "../../hooks/useToggle";
import UserPortrait from "../../componentes/userPortrait/UserPortrait";
import "./NavBar.module.css";

export default function Navbar() {
  const [isLogged, toggleHandler] = useToggle(false);

  return (
    <div className="nav-container">
      <button onClick={toggleHandler}>{isLogged ? "Logout" : "Login"} </button>
      <UserPortrait status={isLogged} />
    </div>
  );
}
