import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../Context";
import AddBook from "./AddBook";
import AddTodo from "./AddTodo";
import Books from "./Books";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "./Signup";

/**
 * Local State App(Root Component) & two functions
 * Passed those state & functions to Context API
 * Wrap all the components inside ContextAPI Provider
 * Protected Route
 * Login & Logout with storing user state in LocalStorage
 */

const App = () => {
  const [loader, setLoader] = useState(true);
  let [user, setUser] = useState(null);

  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user"));
    if (_user) {
      setUser(_user);
      setLoader(false);
    } else {
      setLoader(false);
    }
  }, []);

  let signin = (newUser) => {
    setUser(newUser);
  };

  let signout = (cb) => {
    setUser(null);
    localStorage.clear();
    cb();
  };

  const obj = { user, signin, signout };
  if (loader)
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>LOADING...</h1>
      </div>
    );
  return (
    <AuthContext.Provider value={obj}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <Books />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add_book"
            element={
              <ProtectedRoute>
                <AddBook />
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
