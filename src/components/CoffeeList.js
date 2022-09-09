import React from "react";
import Coffee from "./Coffee";

const mainCoffeeList = [
  {
    name:"Colombian Peaberry",
    origin:"Colombia",
    price:"$3.50",
    roast:"Dark"
  },
  {
    name:"Highlander Grogg",
    origin:"South Dakota",
    price:"$5.50",
    roast:"Medium"
  }
];

function CoffeeList() {
  return (
    <React.Fragment>
      <hr/>
      {mainCoffeeList.map((coffee, index) =>
        <Coffee 
        name={coffee.name} 
        origin={coffee.origin} 
        price={coffee.price}
        roast={coffee.roast}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default CoffeeList;