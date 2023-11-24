import React, { useEffect, useState } from "react";
import "./styling/home.css";
import * as Icon from "react-bootstrap-icons";
import logo from "./docs/logo.jpg";
import { productsArr } from "../products/products";
import { Carousel, CarouselItem } from "react-bootstrap";
import { getCart, saveCart } from "./cartoperations";

export const Home = () => {
  const storedCart = getCart("CART") || [];
  const [menu, setMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sort, setSort] = useState(0);
  const [filter, setFilter] = useState(0);
  const [cartCount, setCartCount] = useState(storedCart.length);

  // shuffling array products
  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };
  const ProductsList = shuffleArray(productsArr);

  // filtering array
  const filterArray =
    filter === 1
      ? ProductsList.filter((filter) => filter.category === "Top-Wear")
      : ProductsList;
  const filterArray1 =
    filter === 2
      ? [...filterArray].filter((filter) => filter.category === "Bottom-Wear")
      : filterArray;
  const filterArray2 =
    filter === 3
      ? [...filterArray1].filter((filter) => filter.gender === "Male")
      : filterArray1;
  const filterArray3 =
    filter === 4
      ? [...filterArray2].filter((filter) => filter.gender === "Female")
      : filterArray2;

  // adding sorting functionality
  const sortedLH =
    sort === 1 ? filterArray3.sort((a, b) => a.price - b.price) : filterArray3;
  const sortedHL =
    sort === 2 ? [...sortedLH].sort((a, b) => b.price - a.price) : sortedLH;
  const sortedLR =
    sort === 3 ? [...sortedHL].sort((a, b) => a.rating - b.rating) : sortedHL;
  const sortedHR =
    sort === 4 ? [...sortedLR].sort((a, b) => b.rating - a.rating) : sortedLR;

  // loading products on refreshing page
  useEffect(() => {
    setProducts(sortedHR);
    setCart(storedCart);
  }, [sort, filter]);
  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  // menubar functionality for small screens
  const handleBar = () => {
    setMenu(!menu);
    console.log(menu, "clicked");
  };

  // onclick event for addinf product to cart
  const handleAdd = (value) => {
    cart.push(value);
    saveCart("CART", cart);
    setCartCount(cart.length);
  };

  // onclick event for removing product from cart
  const handleRemove = (value) => {
    const indexValue = cart.indexOf(value);
    if (indexValue !== -1) {
      cart.splice(indexValue, 1);
    }
    saveCart("CART", cart);
    setCartCount(cart.length);
  };

  return (
    <>
      {/* Navbar  */}

      <div className="Nav_bar">
        <div className="nav_logo">
          <p
            onClick={() => {
              setProducts(ProductsList);
              setSort("");
              setFilter("");
            }}
          >
            <img src={logo} alt="brand_logo" />
          </p>
        </div>

        <ul className="nav_items">
          <li>
            <p
              onClick={() => {
                setFilter(1);
              }}
            >
              Top Wear
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setFilter(2);
              }}
            >
              Bottom Wear
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setFilter(3);
              }}
            >
              Men
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setFilter(4);
              }}
            >
              Women
            </p>
          </li>
          {/* cart  */}
          <div className="cart_info">
            <button
              onClick={() => {
                window.location.href = "/Cart";
              }}
            >
              <Icon.Cart3 size={28} />
              Cart <span>{cartCount}</span>
            </button>
          </div>
        </ul>
        <Icon.List
          size={32}
          className="small_icon"
          onClick={() => {
            handleBar();
          }}
        />
      </div>

      {/* Navbar (small screen)  */}

      <div className={`IInd_list ${menu && "open"}`}>
        <ul className={` small_items `}>
          <li>
            <p
              onClick={() => {
                setFilter(1);
              }}
            >
              Top Wear
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setFilter(2);
              }}
            >
              Bottom Wear
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setFilter(3);
              }}
            >
              Men
            </p>
          </li>
          <li>
            <p
              onClick={() => {
                setFilter(4);
              }}
            >
              Women
            </p>
          </li>
        </ul>
      </div>
      <div className="cart_small">
        <button
          onClick={() => {
            window.location.href = "/Cart";
          }}
        >
          <Icon.Cart3 size={22} />
          Cart <span>{cartCount}</span>
        </button>
      </div>

      {/* sorting options  */}
      <div className="sort">
        <label>Sort by</label>
        <div className="sort_buttons">
          <button
            onClick={() => {
              setSort(1);
            }}
          >
            Price by Low to High
          </button>
          <button
            onClick={() => {
              setSort(2);
            }}
          >
            Price by High to Low
          </button>
          <button
            onClick={() => {
              setSort(3);
            }}
          >
            Rating by Low to High
          </button>
          <button
            onClick={() => {
              setSort(4);
            }}
          >
            Rating by High to Low
          </button>
        </div>
      </div>

      {/* dashboard  */}
      <div className="dashboard">
        {products.map((product, i) => {
          return (
            <>
              <div key={100 + i} className="card">
                <Carousel fade controls={false} indicators={false}>
                  <CarouselItem>
                    <img
                      src={product.img[0]}
                      alt={`img1Of${product.product_id}`}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={product.img[1]}
                      alt={`img2Of${product.product_id}`}
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={product.img[2]}
                      alt={`img3Of${product.product_id}`}
                    />
                  </CarouselItem>
                </Carousel>
                <div className="rating">
                  {product.rating}
                  <Icon.Star />
                </div>
                <div className="product_details">
                  <h6>{product.brand}</h6>
                  <p>{product.product_Name}</p>
                  <span>
                    Price: <h5 className="price">₹{product.price}/-</h5>
                  </span>
                </div>
                <div className="cart_buttons">
                  <button
                    type="submit"
                    onClick={() => {
                      handleAdd(product.product_id);
                    }}
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      handleRemove(product.product_id);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
