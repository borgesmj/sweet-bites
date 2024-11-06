"use client";
import { products } from "./placeholder-data";
export async function fetchData() {
  return products;
}

export const addToCart = async (id) => {
  console.log("add to cart " + id);
};

export function fetchCategories(products) {
  const categories = [];
  products.map((product) => {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  });
  return categories;
}

export function openModal() {
  const modal = document.getElementById('size-modal')
  modal.classList.remove('hidden')
  modal.classList.add('flex')
  modal.classList.remove('scale-out-ver-bottom')
  modal.classList.add('scale-in-ver-bottom')
}

export function closeModal() {
  const modal = document.getElementById('size-modal')
  document.getElementsByTagName('html')[0].classList.remove('no-scroll')
  modal.classList.remove('flex')
  modal.classList.remove('scale-in-ver-bottom')
  modal.classList.add('scale-out-ver-bottom')
  setTimeout(() => {
    modal.classList.add('hidden')
  }, 500);
}

export function modalHandler(modalStatus) {
    if (modalStatus){
      openModal()
    } else{
      closeModal()
    }
}