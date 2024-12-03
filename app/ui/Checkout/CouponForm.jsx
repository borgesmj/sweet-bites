import React, { useEffect, useState } from "react";
import DataService from "@/lib/FirebaseService";

const CouponForm = ({
  setDiscauntPeeercent,
  subTotal,
  addNewProduct,
  cartList,
}) => {
  const [userCoupon, setUserCoupon] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const applyCoupon = async (coupon) => {
    const couponConditions = coupon.conditions;
    if (subTotal < couponConditions.min_purchase) {
      setErrorMessage("Tu compra no cumple con la compra mínima");
      return;
    }
    const product = await DataService.fetchProductById(coupon.product_id);
    const newProduct = {
      quantity: 1,
      name: product?.title,
      size: product?.productPrices[0].size,
      detailPrice: product?.productPrices[0].price,
      id: product?.id,
      image: product?.images.png,
      special_product: product.special_product,
    };
    switch (coupon.type) {
      case "discount":
        setDiscauntPeeercent(coupon.discount_value / 100);
        await localStorage.setItem("coupon", JSON.stringify(coupon));
        await setErrorMessage("Cupón aplicado con exito");
        break;
      case "free-product":
        addNewProduct(newProduct);
        await localStorage.setItem("coupon", JSON.stringify(coupon));
        await setErrorMessage("Cupón aplicado con exito");
        break;
      case "discount_free-product":
        setDiscauntPeeercent(coupon.discount_value / 100);
        addNewProduct(newProduct);
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
      setUserCoupon(coupon.code);
      applyCoupon(coupon);
    }
  }, []);

  const validateCoupon = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    //* Verificar que el cliente no haya introducido un valor vacío
    if (userCoupon === "") {
      setErrorMessage("Por favor, ingresa un cupón válido");
      return;
    }
    //* Obtener la lista de cupones
    const couponList = await DataService.fetchCoupons();
    // * Filtrar por el cupón que introdujo el usuario
    const filteredCoupon = await couponList.find((coupon) => {
      return userCoupon === coupon.code;
    });

    //* Verificar que el cupón sea válido
    if (!filteredCoupon) {
      setErrorMessage("El cupón introducido no es correcto");
    } else {
      if (!filteredCoupon.is_valid) {
        setErrorMessage("Este cupón no es válido. Intenta con otro");
        return;
      }

      // * Verificar las fechas del cupon
      const currentDate = new Date();
      const startDate = new Date(`${filteredCoupon.start_date}T00:00:00`);
      const endDate = new Date(`${filteredCoupon.end_date}T23:59:59`);

      if (currentDate <= startDate || currentDate >= endDate) {
        setErrorMessage("El cupón ya no es válido.");
        return;
      }

      applyCoupon(filteredCoupon);
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
          className={`p-2 rounded-full w-32 bg-[--button-bg-secondary] text-[--bg-100] ${
            !!localStorage.getItem("coupon")
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
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
