import "./item.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

const Item = () => {
  // state variables
  const [amount, setAmount] = useState(1);

  // logic (fns)
  const getAmount = (a) => {
    setAmount(a);
    console.log(`Quantity is now ${a}`);
  };

  const getTotal = () => {
    let price = 797.88;
    let total = price * amount;
    return total.toFixed(2);
  };

  // effects

  // return
  return (
    <div className="item">
      <img src="https://picsum.photos/291/218/?blur" alt="" />
      <h5>
        ASUS GeForce RTX 2060 Overclocked 6G GDDR6 Dual-Fan EVO Edition VR
      </h5>
      <label className="price">$797.88</label>
      <br />
      <label className="shipping">Free Shipping</label>
      <hr />
      <div className="item-buttons">
        <label className="total">Total: ${getTotal()}</label>
        <QuantityPicker onChange={getAmount} />
        <button className="btn btn-sm btn-success">Add To Cart</button>
      </div>
    </div>
  );
};

export default Item;
