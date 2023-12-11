import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ categories, shoppingCart }) => {
  const [navbarCheck, setNavbarCheck] = useState(false);
  const handleNavbarCheck = () => {
    setNavbarCheck(!navbarCheck);
  };

  const location = useLocation();

  useEffect(() => {
    setNavbarCheck(false);
  }, [location.pathname]);



  useEffect(() => {
    const burgerMenu = document.querySelector(".burger__menu");
    const spans = burgerMenu.querySelectorAll("span");

    function changeBorderColor() {
      if (window.scrollY > 0) {
        spans.forEach((span) => {
          span.style.borderColor = "black";
        });
      } else {
        spans.forEach((span) => {
          span.style.borderColor = "white";
        });
      }
    }

    // Agregar un evento de desplazamiento para llamar a la función
    window.addEventListener("scroll", changeBorderColor);

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", changeBorderColor);
    };
  }, []);

  return (
    <nav className="z-[1] h-12 fixed w-full top-0 px-4 flex flex-row justify-between items-center bg-driftwood-500">
      <NavLink to="/" className="h-12 w-12 fixed left-8 z-[1]">
        <img
          src="https://borgesmj.github.io/sweet-bites/src/IMG/Logo.png"
          alt=""
          className="h-full w-full"
        />
      </NavLink>
      <div className="bg-driftwood-300 h-8 w-full md:flex flex-row justify-end md:h-4">
        <input
          readOnly
          type="checkbox"
          name=""
          id="navcheck"
          className="hidden"
          checked={navbarCheck}
        />
        <div
          className="burger__menu w-8 h-8 fixed right-8 flex flex-col justify-between md:hidden"
          onClick={handleNavbarCheck}
        >
          <span className="border-white border-solid border-b-2 w-full opacity-100 rounded-4xl"></span>
          <span className="border-white border-solid border-b-2 w-full opacity-100 rounded-4xl"></span>
          <span className="border-white border-solid border-b-2 w-full opacity-100 rounded-4xl"></span>
        </div>
        <ul className="navlist z-[2] fixed w-full bg-driftwood-300 h-full top-12 right-0 flex-col p-4 opacity-0 md:static md:opacity-100 md:flex md:flex-row md:justify-between md:items-center md:w-fit md:h-4 md:p-0 md:me-16">
          <li className="navbar-option hidden md:block  text-white mt-4 text-4xl font-bold md:text-xl lg:text-2xl md:mt-0 rounded-lg md:opacity-90  md:px-4 md:mx-2">
            <NavLink to="/" className="relative">
              INICIO
            </NavLink>
          </li>
          {categories.map((item) => (
            <li
              className="navbar-option text-white mt-4 text-4xl font-bold md:text-xl lg:text-2xl md:mt-0 rounded-lg md:opacity-90 md:px-4 md:mx-2"
              key={`navoption_${item}`}
            >
              <NavLink to={`/${item}/`} className="relative">
                {item.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
