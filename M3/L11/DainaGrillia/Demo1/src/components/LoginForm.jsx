import style from "./styles/LoginForm.module.css";

function LoginForm() {
  return (
    <div className={style.container}>
      <h1>Bienvenido</h1>
      <form>
        <h1>Login</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
