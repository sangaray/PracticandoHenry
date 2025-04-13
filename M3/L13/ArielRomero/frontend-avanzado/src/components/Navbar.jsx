import useToggle from "../hooks/useToggle";

export default function Navbar() {
  const [isLogged, setIsLogged] = useToggle(false);

  return (
    <div>
      <button onClick={setIsLogged}>{isLogged ? "Logout" : "Login"}</button>
    </div>
  );
}
