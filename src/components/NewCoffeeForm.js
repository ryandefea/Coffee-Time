import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewCoffeeForm(props){
  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
    name: event.target.name.value,
    origin: event.target.origin.value,
    price: event.target.price.value,
    roast: event.target.roast.value,
    id: v4()
  });
  }

  NewCoffeeForm.propTypes = {
    onNewCoffeeCreation: PropTypes.func
  };

  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Coffee Name' />
        <input
          type='text'
          name='origin'
          placeholder='Coffee Origin' />
        <input
          type='text'
          name='price'
          placeholder='Money' />
        <input
          type='text'
          name='roast'
          placeholder='Coffee Roast' />
        <button type='submit'>Help!</button>
      </form>
    </React.Fragment>
  );
}



export default NewCoffeeForm;