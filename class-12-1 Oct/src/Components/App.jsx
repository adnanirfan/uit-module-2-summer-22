import {
  child,
  onChildAdded,
  onValue,
  push,
  ref,
  set,
} from "firebase/database";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fakeAuthProvider } from "../Auth";
import AuthContext from "../Context";
import { database } from "../firebaseConfig";
import AddTodo from "./AddTodo";
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
  useEffect(() => {
    const rootRef = ref(database);
    console.log("asdfasdfsadf");
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
    console.log(11111111);
    return () => {
      console.log("22222222");
    };
  }, []);
  return (
    <div>
      <input type="text" value={v} onChange={(e) => setV(e.target.value)} />
      <button
        onClick={() => {
          const postListRef = ref(database, "idrees-todos");
          const newPostRef = push(postListRef);
          set(
            newPostRef,
            v /* {
            // ...
          } */
          );
        }}
      >
        Add
      </button>
      {/* {a.map((i) => (
        <div>{i}</div>
      ))} */}
    </div>
  );
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
