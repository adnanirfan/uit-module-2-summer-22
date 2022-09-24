import React from "react";
const ThemeContext = React.createContext();
class App extends React.Component {
  render() {
    return (
      <>
        <ThemeContext.Provider value="dark">
          <Toolbar />
        </ThemeContext.Provider>

        <ThemeContext.Provider value="light">
          <Toolbar />
        </ThemeContext.Provider>

        <Toolbar />
      </>
    );
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log("this.context:", this.context);
    return (
      <button
        theme={this.context}
        style={
          this.context === "dark"
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "aqua", color: "black" }
        }
      >
        Submit
      </button>
    );
  }
}

export default App;
