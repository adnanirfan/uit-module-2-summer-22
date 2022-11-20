import { useContext, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import AuthContext from "../Context";

function Login() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        value={form.username}
        onChange={(event) => setForm({ ...form, username: event.target.value })}
      />
      <input
        type="text"
        value={form.email}
        onChange={(event) => setForm({ ...form, email: event.target.value })}
      />
      <input
        type="text"
        value={form.password}
        onChange={(event) => setForm({ ...form, password: event.target.value })}
      />
      <button
        onClick={() =>
          auth.signin(
            {
              username: form.username,
              email: form.email,
              password: form.password,
            },
            () => {
              localStorage.setItem("user", JSON.stringify(form));
              navigate("/");
            }
          )
        }
      >
        LOGIN
      </button>
      <Link to="/">Home</Link>
    </>
  );
}

export default Login;
