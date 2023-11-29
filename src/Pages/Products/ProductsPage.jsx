import React from "react";
import ProductItem from "../../Components/ProductItem/ProductItem";
import CartBar from "../../Components/CartBar/CartBar";

const ProductsPage = ({
  category,
  productosData,
  setShoppingCart,
  shoppingCart,
  eliminarProducto,
}) => {
  const filteredData = productosData.filter((item) => {
    return item.type === category;
  });

  return (
    <div className="border-dotted border-[#43e09e] border-4 rounded-xl p-4 my-10">
      <p className="text-4xl">{category.toUpperCase()}</p>
      <div className="flex flex-row flex-wrap items-center justify-center ">
        {filteredData.map((producto, index) => (
          <ProductItem
            key={`producto_${index}`}
            product={producto}
            className="flex flex-col justify-between items-center h-fit py-8 m-4 md:w-2/5 rounded-2xl bg-blue-100 lg:w-1/4 2xl:w-1/5"
            setShoppingCart={setShoppingCart}
            shoppingCart={shoppingCart}
          />
        ))}
      </div>
      {shoppingCart.length > 0 && (
        <CartBar
          shoppingCart={shoppingCart}
          eliminarProducto={eliminarProducto}
        />
      )}
    </div>
  );
};

export default ProductsPage;
