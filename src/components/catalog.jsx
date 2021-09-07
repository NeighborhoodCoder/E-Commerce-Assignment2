import "./catalog.css";
import Item from "./item";

const Catalog = () => {
  return (
    <div className="catalog">
      <h3 className="display-5">Check our amazing products!</h3>
      <div className="item-box">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Catalog;
