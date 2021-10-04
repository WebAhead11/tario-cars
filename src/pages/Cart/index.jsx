import React from "react";
function Cart(props) {
  const onSubmit1 = (event) => {
    event.preventDefault();
    props.setCars([]);
  };
  return (
    <div>
      {props.cars.map((car) => (
        <div>
          <h1>{car.company}</h1>
          <h2>{car.model}</h2>
          <h2>{car.color}</h2>
        </div>
      ))}
      <button onClick={onSubmit1}>purchase</button>
    </div>
  );
}
export default Cart;
