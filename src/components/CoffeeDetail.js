import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingSellBag } = props;

  return (
    <React.Fragment>
      <h1>Coffee Order Detail</h1>
      <h3>{coffee.name} - {coffee.origin}</h3>
      <p>${coffee.price}</p>
      <p>{coffee.roast}</p>
      <p>{coffee.burlapOfBeans}/lbs</p>
      <button onClick={ props.onClickingEdit }>Update Order</button>
      <button onClick={()=> props.onClickingDelete(coffee.id) }>Delete Order</button>
      <button onClick={()=> onClickingSellBag(coffee.id)}>Sell 1lb of Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSellBag: PropTypes.func
};

export default CoffeeDetail;