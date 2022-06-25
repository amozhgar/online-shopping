import "./product-card.styles.scss";
import Button, { Button_Type_Classes } from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} className="img" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={Button_Type_Classes.inverted}
        onClick={addProductToCart}
      >
        Add to Card
      </Button>
    </div>
  );
};

export default ProductCard;
