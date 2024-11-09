import React, { useEffect } from "react";
import { useCart } from "@/lib/AddToCartContext";
import { encodeUrl } from "@/lib/encodeUrl";
import DataService from "@/lib/FirebaseService";

const ProductPageContent = ({productName}) => {
  const { setSelectedProduct , selectedProduct} = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      const products = await DataService.fetchData();
      const product = await products.find((product) => {
        return encodeUrl(product.title) === productName
      });
      setSelectedProduct(product)
    };
    fetchProduct()
}, []);
console.log(selectedProduct)
  return <div>ProductPageContent</div>;
};

export default ProductPageContent;
