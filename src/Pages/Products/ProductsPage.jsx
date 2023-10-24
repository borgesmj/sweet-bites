import React from "react";
import ProductItem from "../../Components/ProductItem/ProductItem";
import CartBar from "../../Components/CartBar/CartBar";

const ProductsPage = ({
  category,
  productosData,
  setShoppingCart,
  shoppingCart,
  eliminarproducto,
}) => {
  const filteredData = productosData.filter((item) => {
    return item.type === category;
  });

  return (
    <div className="border-dotted border-[#43e09e] border-4 rounded-xl p-4 my-10">
      <p className="text-4xl">{category.toUpperCase()}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 md:place-content-between">
        {filteredData.map((producto, index) => (
          <ProductItem
            key={`producto_${index}`}
            product={producto}
            className="flex flex-col justify-between items-center py-8 my-8 md:w-4/5 rounded-2xl bg-blue-100"
            setShoppingCart={setShoppingCart}
            shoppingCart={shoppingCart}
          />
        ))}
      </div>
      {shoppingCart.length > 0 && (
        <CartBar
          shoppingCart={shoppingCart}
          eliminarproducto={eliminarproducto}
        />
      )}
    </div>
  );
};

export default ProductsPage;
