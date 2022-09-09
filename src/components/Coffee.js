import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.origin}</h3>
      <p>{props.price}</p>
      <p>{props.roast}</p>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired
};

export default Coffee;