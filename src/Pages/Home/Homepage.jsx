import React from "react";
import { NavLink } from "react-router-dom";
import ProductItem from "../../Components/ProductItem/ProductItem";
import Arrow from "../../Icons/Arrow";
import CartBar from "../../Components/CartBar/CartBar";

const Homepage = ({
  categories,
  productosData,
  setShoppingCart,
  shoppingCart,
  eliminarProducto,
}) => {
  return (
    <div>
      {categories.map((item) => (
        <div
          key={`homepage_option_${item}`}
          className="border-dotted border-[#43e09e] border-4 rounded-xl p-4 my-10"
        >
          <h1 className="text-xl md:text-2xl -mt-12 -ml-8 bg-white w-24 p-2">
            {item.toUpperCase()}
          </h1>
          <div className="flex flex-col justify-between md:flex-row items-center">
            {productosData
              .filter((product) => product.type === item)
              .slice(0, 2)
              .map((product) => (
                <ProductItem
                  key={`product_key_${product.name}`}
                  product={product}
                  className="my-8 flex flex-col items-center justify-between bg-blue-100 shadow-2xl md:w-1/3 md:h-[33rem] py-8 px-4 rounded-2xl"
                  setShoppingCart={setShoppingCart}
                  shoppingCart={shoppingCart}
                />
              ))}
            {productosData.filter((product) => product.type === item).length >
              2 && (
              <NavLink
                to={`/${item}/`}
                className="shadow-2xl bg-driftwood-400 w-full h-16 flex flex-col items-center justify-center text-2xl rounded-md text-white md:w-32 md:h-32 lg:hover:translate-x-2 lg:hover:shadow-2xl lg:hover:cursor-pointer"
              >
                Ver mas
                <Arrow className="rotate-90" />
              </NavLink>
            )}
          </div>
        </div>
      ))}
      {shoppingCart.length > 0 && (
        <CartBar
          shoppingCart={shoppingCart}
          eliminarProducto={eliminarProducto}
        />
      )}
    </div>
  );
};

export default Homepage;
