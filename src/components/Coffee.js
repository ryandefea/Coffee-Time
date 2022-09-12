import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>{props.name} - {props.origin}</h3>
      <p>${props.price}</p>
      <p>{props.roast}</p>
      <p>inventory: {props.burlapOfBeans}/lbs</p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  burlapOfBeans: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;