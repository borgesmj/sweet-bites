import React, { useState } from "react";

const ProductItem = ({ product, className, setShoppingCart, shoppingCart }) => {
  const [cantidad, setCantidad] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.available) {
      const generarID = () => {
        const numero = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36).substring(2);

        return numero + fecha;
      };

      let name = e.target.querySelector("#productName").innerText;
      let value = Number(e.target.querySelector("#productPrice").innerText);
      let total = value * cantidad;

      const newProduct = {
        name,
        value,
        cantidad,
        total,
        id: generarID(),
      };

      setShoppingCart([...shoppingCart, newProduct]);
      setCantidad(1);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <p className="text-4xl" id="productName">
        {product.name}
      </p>
      <img src={product.image_url} alt="Product Image" className="w-48 h-48" />
      <p>{product.description}</p>
      <p>
        Precio: <span id="productPrice">{product.value}</span> COP
      </p>
      {product.available ? (
        <div className="w-2/5 flex justify-between items-center">
          <button
            className={`text-4xl ${cantidad === 1 ? "invisible" : "visible"}`}
            onClick={() => {
              setCantidad(cantidad - 1);
            }}
            type="button"
          >
            -
          </button>
          <input
            htmlFor=""
            className="text-4xl bg-white font w-1/3 text-center"
            id="productCantidad"
            value={cantidad}
            disabled
          />
          <button
            className="text-4xl"
            onClick={() => {
              setCantidad(cantidad + 1);
            }}
            type="button"
          >
            +
          </button>
        </div>
      ) : null}
      <input
        className={`addToCartBtn lg:w-40 lg:h-16 mt-8 ${
          product.available ? "bg-driftwood-300" : "bg-[#9b9b9b]"
        } p-4 rounded-lg ${
          product.available
            ? "lg:hover:bg-driftwood-500 lg:hover:text-white lg:hover:cursor-pointer"
            : "lg:hover:cursor-not-allowed"
        }`}
        type="submit"
        value={
          product.available ? "Agregar al carrito" : "Producto no disponible"
        }
      />
    </form>
  );
};

export default ProductItem;
