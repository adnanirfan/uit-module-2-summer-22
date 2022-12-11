import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context";

function Home(props) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <p>{auth.user.username}</p>
      <p>{auth.user.email}</p>
      <p>{auth.user.password}</p>
      <Link to="/contact">Contact Us</Link>
      <br />
      <a href="/contact">Contact Us</a>
      <button onClick={() => auth.signout(() => navigate('/login'))}>LOGOUT</button>
    </>
  );
}

export default Home;
