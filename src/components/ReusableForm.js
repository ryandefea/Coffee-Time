import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>Submit Order</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmitted: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
