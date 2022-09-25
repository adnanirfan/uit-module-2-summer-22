import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import AuthContext from "../Context";
import { fakeAuthProvider } from "../Auth";
import ProtectedRoute from "./ProtectedRoute";

/**
 * Local State App(Root Component) & two functions
 * Passed those state & functions to Context API
 * Wrap all the components inside ContextAPI Provider
 * Protected Route
 * Login & Logout with storing user state in LocalStorage
 */

const App = () => {
  let [user, setUser] = useState(() => {
    const userObj = JSON.parse(localStorage.getItem("user"));
    console.log("userObj", userObj);
    return userObj;
  });

  let signin = (newUser, callback) => {
    console.log("CALLED FROM LOGIN page");
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute name="osama">
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
