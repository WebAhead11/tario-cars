import React from "react"
import { cars as carsAtom } from "../../state"
import { useRecoilState } from "recoil"

function Cart(props) {
  const [cars, setCars] = useRecoilState(carsAtom)

  const onSubmit1 = (event) => {
    event.preventDefault()
    setCars([])
  }

  return (
    <div>
      {cars.map((car) => (
        <div>
          <h1>{car.company}</h1>
          <h2>{car.model}</h2>
          <h2>{car.color}</h2>
        </div>
      ))}
      <button onClick={onSubmit1}>purchase</button>
    </div>
  )
}
export default Cart
