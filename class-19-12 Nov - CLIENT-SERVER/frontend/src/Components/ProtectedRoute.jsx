import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context";

function ProtectedRoute(props) {
  const auth = useContext(AuthContext);
  console.log("FROM LOGIN ________ ", auth.user?.userType, props.name);
  
  // /books
  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }
  // if (auth.user.userType !== "admin") {
  //   return <Navigate to="/" replace />;
  // }
  return props.children;
}

export default ProtectedRoute;
