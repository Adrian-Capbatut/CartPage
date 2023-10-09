import ButtonDelete from "../ButtonDelete";
import Count from "../Count";
import "./styles.scss";

const Product = () => {
  return (
    <section className="product">
      <div className="product__img">
        <img
          src="./img/product/iPhone-13.jpg"
          alt="Apple iPhone 15 Plus 256 GB Yellow"
        />
      </div>
      <div className="product__title">Apple iPhone 15 Plus 256 GB Yellow</div>
      <div className="product__count">
        <Count />
      </div>
      <div className="product__price">500$</div>
      <div className="product__controls">
        <ButtonDelete />
      </div>
    </section>
  );
};

export default Product;
