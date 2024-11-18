import React, { useEffect } from "react";
import { useCart } from "@/lib/AddToCartContext";
import { encodeUrl } from "@/lib/encodeUrl";
import DataService from "@/lib/FirebaseService";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { openModal } from "@/lib/uiHandlers";
const ProductPageContent = ({ productName }) => {
  const { setSelectedProduct, selectedProduct } = useCart();
  useEffect(() => {
    const fetchProduct = async () => {
      const products = await DataService.fetchData();
      const product = await products.find((product) => {
        return encodeUrl(product.title) === productName;
      });
      setSelectedProduct(product);
    };
    fetchProduct();
  }, []);

  return (
    <div className="flex flex-col-reverse items-center justify-normal gap-4 w-full p-4 my-4 h-fit lg:flex-row  lg:w-2/3 lg:mx-auto">
      {selectedProduct?.images?.webp ? (
        <>
          {selectedProduct?.images?.webp ? (
            <>
              <Image
                src={selectedProduct.images.webp}
                width="250"
                height="200"
                alt={selectedProduct.images.alt || "Product Image"}
                className="h-auto block md:hidden"
              />
              <Image
                src={selectedProduct.images.webp}
                width="350"
                height="200"
                alt={selectedProduct.images.alt || "Product Image"}
                className="h-auto hidden md:block lg:hidden"
              />
              <Image
                src={selectedProduct.images.webp}
                width="400"
                height="400"
                alt={selectedProduct.images.alt || "Product Image"}
                className="h-auto hidden lg:block"
              />
            </>
          ) : (
            <p>Loading image...</p>
          )}
          <div className="info w-full flex flex-col items-center lg:w-1/2">
            {/** Breadcrumbs */}
            <div className="w-full flex flex-col items-center">
              <Link
                className="w-full flex flex-row items-center justify-center font-semibold"
                href="/tienda"
              >
                <IoIosArrowBack />
                Regresar a los productos
              </Link>
            </div>
            {/** Product Name */}
            <h3 className="text-center uppercase text-[--accent-100] text-2xl my-4">
              {selectedProduct?.title}
            </h3>
            {/**Descripcion */}
            <p className="w-full text-left my-4 md:w-2/3 lg:w-full">
              {selectedProduct?.description}
            </p>
            <button
              type="button"
              className="text-center mx-auto p-4 w-1/2 rounded font-semibold bg-[--button-bg-primary] hover:bg-[--button-bg-primary-hover] text-[--bg-100]"
              onClick={openModal}
            >
              Ver Precios
            </button>
          </div>
        </>
      ) : (
        <p>Cargando información del producto</p>
      )}
    </div>
  );
};

export default ProductPageContent;
