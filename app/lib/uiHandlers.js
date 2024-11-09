/**
 * * Actualiza la UI del ícono de carrito para reflejar el número de productos.
 * @param {number} productsLength - La cantidad de productos en el carrito.
 */
export const setCartLengthUi = (productsLength) => {
  const cartButton = document.getElementById("shopping-bag-number");
  if (productsLength > 0) {
    cartButton.classList.remove("opacity-0");
    cartButton.classList.add("opacity-100");
    cartButton.innerText = `${productsLength}`;
    cartButton.classList.add("scale-up-center"); // Añade animación para resaltar el número
    setTimeout(() => {
      cartButton.classList.remove("scale-up-center"); // Elimina la animación después de 500ms
    }, 500);
  } else {
    cartButton.classList.remove("opacity-100");
    cartButton.classList.add("opacity-0");
    cartButton.innerText = "";
  }
};

/**
 * * Abre la lista del carrito de compras, haciendo visible el contenedor.
 */
export const openShoppingCartList = () => {
  const shoppingCartListSection = document.getElementById("shopping-cart-list");
  shoppingCartListSection.classList.remove("hidden", "scale-out-hor-right");
  shoppingCartListSection.classList.add("scale-in-hor-right", "flex");
};

/**
 * * Cierra la lista del carrito de compras, ocultando el contenedor.
 */
export const closeShoppingCartList = () => {
  const shoppingCartListSection = document.getElementById("shopping-cart-list");
  shoppingCartListSection.classList.remove("scale-in-hor-right");
  shoppingCartListSection.classList.add("scale-out-hor-right");
  setTimeout(() => {
    shoppingCartListSection.classList.remove("flex");
    shoppingCartListSection.classList.add("hidden"); // Oculta el contenedor después de 500ms
  }, 500);
}

/**
 * * Abre el modal de selección de tamaño de producto.
 */
export function openModal() {
  const modal = document.getElementById("size-modal");
  modal.classList.remove("hidden", "scale-out-ver-bottom");
  modal.classList.add("flex", "scale-in-ver-bottom");
}

/**
 * * Cierra el modal de selección de tamaño de producto.
 */
export function closeModal() {
  const modal = document.getElementById("size-modal");
  document.getElementsByTagName("html")[0].classList.remove("no-scroll");
  modal.classList.remove("scale-in-ver-bottom");
  modal.classList.add("scale-out-ver-bottom");
  setTimeout(() => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }, 500);
}
