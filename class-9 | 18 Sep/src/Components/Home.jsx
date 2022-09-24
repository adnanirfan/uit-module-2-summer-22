import { Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <h1>Home</h1>
      <Link to="/contact">Contact Us</Link>
      <a href="/contact">Contact Us</a>
    </>
  );
}

export default Home;
