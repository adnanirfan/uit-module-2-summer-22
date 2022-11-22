import { Link } from "react-router-dom";

function AddTodo(props) {
  return (
    <>
      <h1>AddTodo</h1>
      <Link to="/contact">Contact Us</Link>
      <br />
      <a href="/contact">Contact Us</a>
    </>
  );
}

export default AddTodo;
