import {
  child,
  onChildAdded,
  onValue,
  push,
  ref,
  set,
} from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fakeAuthProvider } from "../Auth";
import AuthContext from "../Context";
import { database } from "../firebaseConfig";
import AddTodo from "./AddTodo";
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
  const [v, setV] = useState("");
  const [a, setA] = useState([]);
  const [loader, setLoader] = useState(true);
  let [user, setUser] = useState(() => {
    const userObj = JSON.parse(localStorage.getItem("user"));
    // console.log("userObj", userObj);
    return userObj;
  });

  useEffect(() => {
    const auth = getAuth();
    // console.log("auth.currentUser: ", auth.currentUser);
    onAuthStateChanged(auth, (user) => {
      console.log("ON MOUNT user:", user);
      if (user) {
        const uid = user.uid;
        setUser(user);
        setLoader(false);
        // ...
      } else {
        // User is signed out
        // ...
        setLoader(false);
      }
    });
  }, []);
  useEffect(() => {
    const rootRef = ref(database);

    onChildAdded(
      child(rootRef, "idrees-todos"),
      (data) => {
        setA([...a, data.val()]);
        // addCommentElement(
        //   postElement,
        //   data.key,
        //   data.val().text,
        //   data.val().author
        // );
      },
      (e) => {
        console.log("ERRRRRR_", e);
      }
    );
    // onValue(
    //   child(rootRef, "idrees-todos"),
    //   (snapshot) => {
    //     console.log("SNAPSHOT", snapshot.val());
    //     setA(snapshot.val());
    //   },
    //   (error) => {
    //     console.log("ERROR,", error);
    //   }
    // );
    // console.log(11111111);
    return () => {
      // console.log("22222222");
    };
  }, []);

  let signin = (newUser) => {
    setUser(newUser);
  };

  let signout = () => {
    setUser(null);
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
