import { useContext, useState } from "react";
import axios from "axios";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { AuthContext } from "../Context";

function Login() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState("");
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const res = await axios.post("http://localhost:4000/api/signin", form);
      console.log("LOGIN", res);
      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      auth.signin(user);
      navigate("/");
    } catch (error) {
      console.log("LOGIN ERROR", error);
      setErrors(error.response.data);
    }

    /* const _auth = getAuth();
    signInWithEmailAndPassword(_auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        auth.signin(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        setErrors(errorMessage);
      }); */
  };
  return (
    <>
      <h1>Login</h1>

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
      {errors}
      <button onClick={signin}>LOGIN</button>
    </>
  );
}

export default Login;
