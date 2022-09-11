import React from 'react';
import ReusableForm from './ReusableForm';

function EditCoffeeForm (props) {
  return (
    <React.Fragment>
      <ReusableForm
      buttonText="Update Coffee" />
    </React.Fragment>
  );
}

export default EditCoffeeForm;