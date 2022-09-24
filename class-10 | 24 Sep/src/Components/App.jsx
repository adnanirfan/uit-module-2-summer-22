import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodo from "./AddTodo";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import AuthContext from "../Context";
import ProtectedWrapper from "./ProtectedWrapper";
// function AuthProvider({ children }: { children: React.ReactNode }) {

// }

const App = () => {
  let [user, setUser] = useState(null);

  let signin = (newUser, callback) => {
    // return fakeAuthProvider.signin(() => {
    //   setUser(newUser);
    //   callback();
    // });
  };

  let signout = (callback) => {
    // return fakeAuthProvider.signout(() => {
    //   setUser(null);
    //   callback();
    // });
  };

  let value = { user, signin, signout };

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedWrapper name="osama">
                <Home />
              </ProtectedWrapper>
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
