import "./login.scss";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";

function Login() {
  const { error, loading, handleSubmit } = useLogin();

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            type="text"
            placeholder="Username"
            required
            minLength={3}
            maxLength={20}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            minLength={6}
          />
          <button disabled={loading}>Login</button>
          {error ? <span>{error}</span> : null}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
