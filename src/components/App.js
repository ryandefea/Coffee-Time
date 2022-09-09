import React from "react";
import Header from "./Header";
import CoffeeControl from "./CoffeeControl";

function App() {
  const name = "Colombian Peaberry";
  return (
    <React.Fragment>
      <h1>Coffee Time</h1>
      <h3>{name}</h3>
      <h3>origin-Colombia</h3>
      <p>price-$3.50</p>
      <p>roast-Dark</p>
      <hr/>
    </React.Fragment>
  );
}

export default App;
