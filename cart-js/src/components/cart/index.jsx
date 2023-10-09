import CartFooter from "../CartFooter";
import Cartheader from "../CartHeader";
import Product from "../Product";

const Cart = () => {
  return (
    <section className="cart">
      <Cartheader />

      <Product />

      <section className="product">
        <div className="product__img">
          <img
            src="./img/product/macbook.jpg"
            alt="Apple MacBook Air 15 2023 Space Gray"
          />
        </div>
        <div className="product__title">
          Apple MacBook Air 15 2023 Space Gray
        </div>
        <div className="product__count">
          <div className="count">
            <div className="count__box">
              <input
                type="number"
                className="count__input"
                min="1"
                max="100"
                value="1"
              />
            </div>
            <div className="count__controls">
              <button type="button" className="count__up">
                <img src="./img/icons/icon-up.svg" alt="Increase" />
              </button>
              <button type="button" className="count__down">
                <img src="./img/icons/icon-down.svg" alt="Decrease" />
              </button>
            </div>
          </div>
        </div>
        <div className="product__price">1299$</div>
        <div className="product__controls">
          <button type="button">
            <img src="./img/icons/cross.svg" alt="Delete" />
          </button>
        </div>
      </section>
      <section className="product">
        <div className="product__img">
          <img
            src="./img/product/watch.jpg"
            alt="Apple Watch SE (2022) Silver"
          />
        </div>
        <div className="product__title">Apple Watch SE (2022) Silver</div>
        <div className="product__count">
          <div className="count">
            <div className="count__box">
              <input
                type="number"
                className="count__input"
                min="1"
                max="100"
                value="1"
              />
            </div>
            <div className="count__controls">
              <button type="button" className="count__up">
                <img src="./img/icons/icon-up.svg" alt="Increase" />
              </button>
              <button type="button" className="count__down">
                <img src="./img/icons/icon-down.svg" alt="Decrease" />
              </button>
            </div>
          </div>
        </div>
        <div className="product__price">299$</div>
        <div className="product__controls">
          <button type="button">
            <img src="./img/icons/cross.svg" alt="Delete" />
          </button>
        </div>
      </section>

      <CartFooter />
    </section>
  );
};

export default Cart;
