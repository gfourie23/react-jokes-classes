import React from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

class App {
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    );
  }
}

export default App;
