import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context";

function Signup(props) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const signup = () => {
    const _auth = getAuth();
    createUserWithEmailAndPassword(_auth, form.email, form.password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        const user = userCredential.user;
        console.log(user);
        auth.signin(user);
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrors(errorMessage);
        console.log(error);
        // ..
      });
  };
  return (
    <>
      <h1>Signup</h1>

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
      <button onClick={signup}>Signup</button>
    </>
  );
}

export default Signup;
