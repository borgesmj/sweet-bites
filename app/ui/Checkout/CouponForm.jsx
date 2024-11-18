import React, { useEffect, useState } from "react";
import DataService from "@/lib/FirebaseService"

const CouponForm = ({ setDiscauntPeeercent, subTotal, addNewProduct }) => {
  const [userCoupon, setUserCoupon] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const applyCoupon = async (coupon) => {
    switch (coupon.type) {
      case "discount":
        if (subTotal > coupon.conditions.min_purchase) {
          await localStorage.setItem("coupon", JSON.stringify(coupon));
          await setDiscauntPeeercent(coupon.value / 100);
          await setErrorMessage("Cupón aplicado con exito");
        }
        break;
      case "free_product":
        const product = await DataService.fetchProductById(coupon.product_id);
        const newProduct = {
          quantity: 1,
          name: product?.title,
          size: product?.price[0].size,
          detailPrice: product?.price[0].price,
          id: product?.id,
          image: product?.images.png,
          special_product: product.special_product
        };
        addNewProduct(newProduct)
        await localStorage.setItem("coupon", JSON.stringify(coupon));
        await setErrorMessage("Cupón aplicado con exito");
        break;
      default:
        setErrorMessage("El cupón no es válido");
        break;
    }
  };
  useEffect(() => {
    const LScoupon = localStorage.getItem("coupon");
    if (LScoupon) {
      const coupon = JSON.parse(LScoupon);
      setUserCoupon(coupon.id);
      applyCoupon(coupon);
    }
  }, []);

  const validateCoupon = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    /**
     * @returns erroe si el cliente envia un mensaje vacio
     */
    if (userCoupon === "") {
      setErrorMessage("Debes ingresar un cupón válido");
      return;
    }
    /**
     * @satisfies verifica que el cupon si existe dentro del arreglo de cupones
     */
    const coupons = await DataService.fetchCoupons();
    const couponExists = coupons.find((coupon) => {
      return coupon.id.toUpperCase() === userCoupon;
    });
    if (!couponExists) {
      setErrorMessage("El cupón no está disponible");
      return;
    } else {
      // * verificar la fecha
      const currentDate = new Date();
      const startDate = new Date(couponExists.start_date);
      const endDate = new Date(couponExists.end_date);
      if (currentDate < startDate || currentDate > endDate) {
        setErrorMessage("El cupón ha expirado");
        return;
      } else if (localStorage.getItem("coupon")) {
        setErrorMessage("Ya tienes un cupón aplicado");
        return;
      } else {
        applyCoupon(couponExists);
      }
    }
  };
  return (
    <div className="w-full flex flex-col">
      <div
        id="coupon-field"
        className="flex flex-col gap-4 w-full items-center md:flex-row md:justify-around"
      >
        <input
          type="text"
          id="cuponInput"
          placeholder="¿Tienes un cupon?"
          className="bg-transparent outline-none focus:border-b border-gray-600 p-2 w-full md:w-1/2 placeholder:text-[--text-100] "
          tabIndex="1"
          onChange={(e) => {
            setUserCoupon(e.target.value.toUpperCase());
          }}
          value={userCoupon}
          disabled={!!localStorage.getItem("coupon")}
        />
        <button
          type="button"
          className={`p-2 rounded-full w-32 bg-[--button-bg-secondary] text-[--bg-100] ${!!localStorage.getItem("coupon") ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={validateCoupon}
          disabled={!!localStorage.getItem("coupon")}
        >
          Aplicar
        </button>
      </div>
      <span
        className={`w-full text-center text-xs text-red-700 font-semibold `}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default CouponForm;
