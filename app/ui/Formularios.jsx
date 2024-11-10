import { useCart } from "@/lib/AddToCartContext";
import CouponForm from "./Checkout/CouponForm";
import ProductList from "./Checkout/ProductList";
import DeliverOptions from "./Checkout/DeliverOptions";
import TotalAmmount from "./Checkout/TotalAmmount";
import { useEffect, useState } from "react";
const Formularios = () => {
  const { cartList } = useCart();
  const [homeDelivery, setHomeDelivery] = useState(false);
  const subTotal = cartList.reduce((acc, product) => {
    return acc + product.detailPrice * product.quantity;
  }, 0);

  if (cartList.length < 1){
    return (
      <h1>no tienes productos</h1>
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('enviar peido')
  }
  return (
    <form className="w-full flex flex-col items-center justify-normal gap-4 lg:flex-row lg:justify-start  lg:items-start" onSubmit={handleSubmit}>
      <div className="w-full p-4 md:w-3/4 lg:w-3/5 xl:w-1/2 gap-4 flex  flex-col items-center">
        <CouponForm />
        <h2 className="w-full text-left">Lista de productos:</h2>
        <ProductList cartList={cartList} />
        <h2 className="w-full text-left">Detalles de la entrega:</h2>
        <DeliverOptions
          homeDelivery={homeDelivery}
          setHomeDelivery={setHomeDelivery}
        />
      </div>
      <TotalAmmount subTotal={subTotal} />
    </form>
  );
};

export default Formularios;

function Loading() {
  return <h2>🌀 Loading...</h2>;
}