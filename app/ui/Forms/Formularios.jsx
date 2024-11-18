import { useCart } from "@/lib/AddToCartContext";
import CouponForm from "../Checkout/CouponForm";
import ProductList from "../Checkout/ProductList";
import DeliverOptions from "../Checkout/DeliverOptions";
import TotalAmmount from "../Checkout/TotalAmmount";
import { useEffect, useState } from "react";
import Link from "next/link";
import { stringify } from "querystring";
const Formularios = () => {
  const { cartList } = useCart();
  const [homeDelivery, setHomeDelivery] = useState(false);
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [discountPercent, setDiscauntPeeercent] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("transferencia");
  const subTotal = cartList.reduce((acc, product) => {
    return acc + product.detailPrice * product.quantity;
  }, 0);

  if (cartList.length < 1) {
    return (
      <div className="w-full h-dvh flex justify-center items-center gap-2">
        <span>Disculpa, no tienes productos en tu carrito. Ve a la </span>
        <Link
          className="font-semibold text-blue-700 underline"
          href={`/tienda`}
        >
          tienda
        </Link>{" "}
        <span>y selecciona los productos a comprar.</span>
      </div>
    );
  }
  const formatDate = (deliveryDate) => {
    const pickedDate = new Date(deliveryDate);
    const day = pickedDate.getDate();
    const month = pickedDate.getMonth();
    const year = pickedDate.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      name: username,
      phonenumber: phonenumber,
      message: message,
      paymentMethod: paymentMethod,
      subtotal: subTotal,
      discountPercent: discountPercent,
      total: subTotal - subTotal * (discountPercent / 100),
      homeDelivery: homeDelivery,
      address: address,
      deliveryDate: formatDate(deliveryDate),
    };
    window.location.href = `/neworder?${stringify(newOrder)}`;
  };
  return (
    <form
      className="w-full flex flex-col items-center justify-normal gap-4 lg:flex-row lg:justify-between  lg:items-start xl:w-3/4 xl:mx-auto"
      onSubmit={handleSubmit}
    >
      <div className="w-full p-4 md:w-3/4 lg:w-3/5 xl:w-1/2 gap-4 flex  flex-col items-center">
        <CouponForm
          setDiscauntPeeercent={setDiscauntPeeercent}
          subTotal={subTotal}
        />
        <h2 className="text-lg font-semibold text-gray-800 mb-4 w-full text-center lg:text-2xl">
          Lista de productos:
        </h2>
        <ProductList cartList={cartList} />
        <h2 className="text-lg font-semibold text-gray-800 mb-4 w-full text-center lg:text-2xl">
          Detalles de la entrega:
        </h2>
        <DeliverOptions
          homeDelivery={homeDelivery}
          setHomeDelivery={setHomeDelivery}
          setUsername={setUsername}
          username={username}
          phonenumber={phonenumber}
          setPhonenumber={setPhonenumber}
          message={message}
          setMessage={setMessage}
          setAddress={setAddress}
          address={address}
          setDeliveryDate={setDeliveryDate}
        />
      </div>
      <TotalAmmount
        subTotal={subTotal}
        discountPercent={discountPercent}
        setPaymentMethod={setPaymentMethod}
      />
    </form>
  );
};

export default Formularios;

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
