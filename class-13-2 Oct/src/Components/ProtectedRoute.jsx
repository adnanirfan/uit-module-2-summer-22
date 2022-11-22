import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context";

function ProtectedRoute(props) {
  const auth = useContext(AuthContext);
  console.log("FROM LOGIN ________ ", auth, props.name);

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }
  return props.children;
}

export default ProtectedRoute;
