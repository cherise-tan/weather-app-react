import React from "react";

// Import components for use in 'App' component
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// initialise 'App' component
class App extends React.Component {
  // display data inside component (using JSX)
  // nb can only return ONE PARENT ELEMENT (enclose within div to be safe)
  render() {
    return (
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
     
    );
  }
};

// export 'App' so it can be used elsewhere
export default App;