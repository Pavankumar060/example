import React, { useEffect, useState } from "react";
import { getCart, saveCart } from "./cartoperations";
import { productsArr } from "../products/products";
import "./styling/cart.css";
import img from "./docs/logo.jpg";

export const CartInfo = () => {
  //   getting products added to cart from local storage
  const CartArr = getCart("CART") || [];

  const [cartProducts, setCartProducts] = useState([]);

  const filterArr = productsArr.filter((product) =>
    CartArr.includes(product.product_id)
  );
  let TotalCost = 0;

  //   load products in cart on refresh
  useEffect(() => {
    setCartProducts(filterArr);
  }, []);

  // onclick event for adding product to cart
  const handleAdd = (value) => {
    CartArr.push(value);
    saveCart("CART", CartArr);
    const newCartArr = productsArr.filter((product) =>
      CartArr.includes(product.product_id)
    );
    setCartProducts(newCartArr);
  };

  // onclick event for removing product from cart
  const handleRemove = (value) => {
    const indexValue = CartArr.indexOf(value);
    if (indexValue !== -1) {
      CartArr.splice(indexValue, 1);
    }
    saveCart("CART", CartArr);
    const newCartArr = productsArr.filter((product) =>
      CartArr.includes(product.product_id)
    );
    setCartProducts(newCartArr);
  };
  return (
    <>
      <div className="nav_bar">
        <p
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img src={img} alt="cart_home" />
        </p>
      </div>
      <div className="cart_dashboard">
        <div className="cart_Dash">
          <h5>
            Cart Details <span>{CartArr.length}</span>
          </h5>
        </div>
        <div>
          {cartProducts.map((product, index) => {
            // setting quantity for products
            const quantity = (array, id) => {
              let count = 0;
              for (let i = 0; i < array.length; i++) {
                if (array[i] === id) {
                  count++;
                }
              }
              return count;
            };

            let price = product.price * quantity(CartArr, product.product_id);
            TotalCost += price;
            saveCart("cost", TotalCost);
            return (
              <>
                <div key={200 + index} className="cart_card">
                  <img src={product.img[0]} alt={`cart${index}`} />
                  <div className="div">
                    <p>
                      <span>{product.brand}</span> {product.product_Name}
                    </p>
                    <div className="product_info">
                      <div className="buttons">
                        <button
                          onClick={() => {
                            handleAdd(product.product_id);
                          }}
                        >
                          Add
                        </button>
                        <h5>{quantity(CartArr, product.product_id)}</h5>

                        <button
                          onClick={() => {
                            handleRemove(product.product_id);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                      <h4>
                        Price : ₹<span>{price}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="nxt_page">
          <button
            type="submit"
            onClick={() => {
              window.location.href = "/Checkout";
            }}
          >
            Check Out
          </button>
          <div className="total_price">
            Total Price = ₹ <span>{TotalCost}</span>
          </div>
        </div>
      </div>
    </>
  );
};
