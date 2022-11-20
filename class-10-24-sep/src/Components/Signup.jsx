import { Link } from "react-router-dom";

function Signup(props) {
  return (
    <>
      <h1>Signup</h1>
      <Link to="/contact">Contact Us</Link>
      <br />
      <a href="/contact">Contact Us</a>
    </>
  );
}

export default Signup;
