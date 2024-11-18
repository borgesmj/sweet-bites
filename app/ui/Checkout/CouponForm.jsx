import React, { useEffect, useState } from "react";

const CouponForm = ({ setDiscauntPeeercent, subTotal }) => {
  const [userCoupon, setUserCoupon] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const applyCoupon = (coupon) => {
    switch (coupon.type) {
      case "discount":
        if (subTotal > coupon.conditions.min_purchase) {
          localStorage.setItem("coupon", JSON.stringify(coupon));
          setDiscauntPeeercent(coupon.value / 100);
          setErrorMessage("Cupón aplicado con exito");
        }
        break;
      case "free_product":
        console.log("cupon de producto gratis");
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
      console.log(coupon);
      setUserCoupon(coupon.id);
      applyCoupon(coupon);
    }
  }, []);
  const coupons = [
    {
      id: "COUPON1",
      type: "discount", // ! Descuento
      value: 10, // ! 10% de descuento
      conditions: {
        // ! condiciones
        min_purchase: 50, // Monto mínimo para que se aplique
        valid_products: ["product1", "product2"], // Productos que aplican
      },
      start_date: "2024-11-01",
      end_date: "2024-11-30",
      is_valid: true, // Esto se evaluará según las condiciones
    },
    {
      id: "COUPON2",
      type: "free_product", // Producto gratis
      value: "product3", // Producto gratis
      conditions: {
        min_purchase: 100, // Monto mínimo para que se aplique
      },
      start_date: "2024-11-01",
      end_date: "2024-12-11",
      is_valid: true,
    },
  ];

  const validateCoupon = (e) => {
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
          className="p-2 rounded-full w-32 bg-[--button-bg-secondary] text-[--bg-100]"
          onClick={validateCoupon}
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
