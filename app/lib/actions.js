"use client";

export async function fetchData() {
  let data = [];
  try {
    const result = await fetch("https://fakestoreapi.com/products");
    data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
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
