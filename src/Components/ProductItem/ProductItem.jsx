import React, { useState } from "react";
import loader from '../Loader/Loader'
import Loader from "../Loader/Loader";

const ProductItem = ({ product, className, setShoppingCart, shoppingCart }) => {
  const [cantidad, setCantidad] = useState(1);
  const [loader, setLoader] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
  
    setLoader(true)
    setTimeout(() => {
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
        setLoader(false)
      } else {
        return;
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={`${className}`}>
      <p className="text-2xl md:text-4xl w-full text-center flex content-center items-center mb-4 md:h-40 md:py:4" id="productName">
        {product.name}
      </p>
      <img src={product.image_url} alt="Product Image" className="w-48 h-48 my-4" />
      <p className="md:text-xl w-full text-center flex content-center items-center md:h-32 ">{product.description}</p>
      <p className="text-2xl lg:text-4xl my-4">
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
            style={{ fontFamily: 'Red Hat Display, sans-serif', fontWeight: 'bold' }}
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
      <button
        className={`addToCartBtn lg:w-40 lg:h-16 mt-8 ${
          product.available ? "bg-driftwood-300" : "bg-[#9b9b9b]"
        } p-4 rounded-lg ${
          product.available
            ? "lg:hover:bg-driftwood-500 lg:hover:text-white lg:hover:cursor-pointer"
            : "lg:hover:cursor-not-allowed"
        } relative flex justify-center items-center`}
        type="submit"
        style={{ fontFamily: 'Red Hat Display, sans-serif', fontWeight: 'bold' }}
      >{
        loader ? <Loader/> : product.available ? "Agregar al carrito" : "Producto no disponible"
      }</button>
    </form>
  );
};

export default ProductItem;
