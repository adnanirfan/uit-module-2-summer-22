import React from "react";
import { useState } from "react";
import { useContext } from "react";
const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider
        value={{
          theme: theme,
          setTheme,
          changeTheme: () => {
            setTheme(theme === "dark" ? "light" : "dark");
          },
        }}
      >
        <Toolbar />
      </ThemeContext.Provider>
    </>
  );
};

function Toolbar() {
  const contextValue = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: contextValue.theme === "dark" ? "red" : "aqua",
      }}
    >
      <ThemedButton />
    </div>
  );
}

const ThemedButton = () => {
  const contextValue = useContext(ThemeContext);
  console.log("theme:", contextValue);
  return (
    <button
      style={
        contextValue.theme === "dark"
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "aqua", color: "black" }
      }
      onClick={contextValue.changeTheme}
    >
      Submit
    </button>
  );
};

export default App;
