import { useState } from "react";
import CartFooter from "../CartFooter";
import Cartheader from "../CartHeader";
import Product from "../Product";
import data from "./../../data";

const Cart = () => {
  const [cart, setCart] = useState(data);

  const increase = (id) => {
    setCart(() => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: ++product.count * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCart(() => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((product) => id !== product.id));
  };

  const products = cart.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        increase={increase}
        decrease={decrease}
        deleteProduct={deleteProduct}
      />
    );
  });

  return (
    <section className="cart">
      <Cartheader />
      {products}
      <CartFooter />
    </section>
  );
};

export default Cart;
