import { useState } from "react";
import UserPortrait from "../../componentes/userPortrait/UserPortrait";
import "./NavBar.module.css";

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false);

  const toggleHandler = () => {
    setIsLogged(!isLogged);
  };
  return (
    <div className="nav-container">
      <button onClick={toggleHandler}>{isLogged ? "Logout" : "Login"} </button>
      <UserPortrait status={isLogged} />
    </div>
  );
}
