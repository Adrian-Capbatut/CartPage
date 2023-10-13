import formatPrice from "../../utils/priceFormatter";
import "./styles.scss";

const CartFooter = ({ total }) => {
  const { count, price } = total;
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{formatPrice(count)} units</div>
      <div className="cart-footer__price">{formatPrice(price)} $</div>
    </footer>
  );
};

export default CartFooter;
