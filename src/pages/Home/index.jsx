import React from "react";
import { carCompanies, colors } from "../../data.js";
function Home(props) {
  const [company, setCompany] = React.useState("");
  const [models, setModels] = React.useState([]);
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ company, model, color });
    // props.cars
    // props.setCars
    props.setCars(props.cars.concat({ company, model, color }));
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit}>
        <select
          onChange={(e) => {
            setCompany(e.target.value);
            // console.log(
            //   carCompanies.find((car) => {
            //     return car.name === e.target.value;
            //   })
            // );
            setModels(
              carCompanies.find((car) => {
                return car.name === e.target.value;
              }).models
            );
          }}
        >
          <option value="" selected></option>
          {carCompanies.map((car) => {
            return <option value={car.name}>{car.name}</option>;
          })}
        </select>
        <select
          onChange={(e) => {
            setModel(e.target.value);
          }}
        >
          {models.map((car) => {
            return <option value={car}>{car}</option>;
          })}
        </select>
        <select
          onChange={(e) => {
            setColor(e.target.value);
          }}
        >
          {colors.map((car) => {
            return <option value={car}>{car}</option>;
          })}
        </select>
        <input type="submit"></input>
      </form>
    </div>
  );
}
export default Home;
