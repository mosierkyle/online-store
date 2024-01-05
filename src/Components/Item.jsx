import { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ name, image, price, category, addToCart, removeFromCart }) => {
  const [quantity, setQuantity] = useState(1);

  function quantityChange(e) {
    if (e <= 1) {
      return;
    }
    setQuantity(e.target.value);
  }

  function quanityIncrease() {
    let newQ = quantity + 1;
    setQuantity(newQ);
  }

  function quanityDecrease() {
    if (quantity <= 1) {
      return;
    }
    let newQ = quantity - 1;
    setQuantity(newQ);
  }

  return (
    <div className="item-content">
      <div className="item-img-div">
        <img className="item-img" src={image} alt={name} />
      </div>
      <div className="item-info">
        <p className="item-name">{name}</p>
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
          tellus.
        </p>
        <p className="item-price">${price}.99</p>
        <div className="item-purchase"></div>
        <Link to={`/${category}`}>Go Back</Link>
        <div className="item-cart">
          <div className="item-quantity">
            <button onClick={quanityDecrease}>-</button>
            <input type="text" value={quantity} onChange={quantityChange} />
            <button onClick={quanityIncrease}>+</button>
          </div>
          <button className="item-add-to-cart">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
