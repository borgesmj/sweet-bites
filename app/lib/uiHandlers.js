export const setCartLengthUi = (productsLength) => {
  const cartButton = document.getElementById("shopping-bag-number");
  if (productsLength > 0) {
    cartButton.classList.remove("opacity-0");
    cartButton.classList.add("opacity-100");
    cartButton.innerText = `${productsLength}`;
    cartButton.classList.add("scale-up-center");
    setTimeout(() => {
      cartButton.classList.remove("scale-up-center");
    }, 500);
  } else {
    cartButton.classList.remove("opacity-100");
    cartButton.classList.add("opacity-0");
    cartButton.innerText = "";
  }
};
