import { push, ref, set } from "firebase/database";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { database } from "../firebaseConfig";
import { AuthContext } from "../Context";

function AddTodo(props) {
  const auth = useContext(AuthContext);
  const addTodo = () => {
    const todoListRef = ref(database, "idrees-todos/" + auth.user.uid);
    const newPostRef = push(todoListRef);
    set(newPostRef, "qweirufiwoadshlksdjfghdaskj");
  };
  return (
    <>
      <h1>AddTodo</h1>
      <button onClick={addTodo}>Add</button>
      <Link to="/contact">Contact Us</Link>
      <br />
      <a href="/contact">Contact Us</a>
    </>
  );
}

export default AddTodo;
