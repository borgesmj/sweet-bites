import ShoppingCartItem from "../Cart/ShoppingCartItem";

const ProductList = ({ cartList }) => {
  return (
    <div id="checkout-cart-list" className="w-full overflow-x-scroll">
      {cartList.map((product, index) => (
        <ShoppingCartItem key={product.key} index={index} product={product} className="relative grid grid-cols-4 w-[150%] md:w-full px-2 border-b border-gray-200 my-3 py-2" />
      ))}
    </div>
  );
};

export default ProductList;
