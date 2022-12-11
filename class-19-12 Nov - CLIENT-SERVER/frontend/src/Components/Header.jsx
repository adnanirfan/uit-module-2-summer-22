import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context";

function Header(props) {
  const style = { margin: 20 };
  const auth = useContext(AuthContext);

  const signout = () => {
    const _auth = getAuth();
    signOut(_auth)
      .then(() => {
        // Sign-out successful.
        auth.signout();
      })
      .catch((error) => {
        // An error happened.
        auth.signout();
      });
  };
  return (
    <div>
      <Link style={style} to="/">
        Home
      </Link>
      <Link style={style} to="/books">
        Books
      </Link>
      <Link style={style} to="/add-todo">
        Add Todo
      </Link>
      {!auth.user && (
        <>
          <Link style={style} to="/signup">
            Signup
          </Link>
          <Link style={style} to="/login">
            Login
          </Link>
        </>
      )}
      {auth.user && <Link onClick={signout}>Signout</Link>}
    </div>
  );
}
export default Header;
