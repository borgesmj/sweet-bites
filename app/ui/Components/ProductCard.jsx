import Image from "next/image";
import { RiArrowRightWideFill } from "react-icons/ri";
export default function Template({ productInfo }) {
  return (
    <div className="whitespace-nowrap w-[300px] p-4 bg-[--bg-200] flex flex-col gap-4 justify-center items-start">
      <Image
        src={productInfo.image}
        width="300"
        height="300"
        alt="Chocolate chips cookie"
        className="w-auto max-h-[200px] object-contain mx-auto"
      />
      <div className="flex flex-col w-full">
        <h2 className="text-2xl font-[600] max-w-full">
          {productInfo.title.length > 20
            ? `${productInfo.title.slice(0, 15)}...`
            : productInfo.title.slice(0, 15)}
        </h2>
      </div>
      <a
        href="#"
        className="w-full flex flex-row gap-2 items-center justify-start text-[--text-100] font-[500] group"
      >
        <RiArrowRightWideFill className="transition-all lg:opacity-0 lg:group-hover:translate-x-6 lg:group-hover:opacity-100" />
        <span className="transition-all group-hover:translate-x-6">
          Ver mas
        </span>
        <RiArrowRightWideFill className="transition-all lg:opacity-100 lg:group-hover:translate-x-6 lg:group-hover:opacity-0" />
      </a>
      <p className="text-2xl font-[600] max-w-full">{`$${productInfo.price}`}</p>
      <div className="relative add-btn w-full bg-[--button-bg-primary] py-4 px-6 text-center rounded-md text-white font-bold cursor-pointer opacity-100  transition-fast  group lg:before:content-['+'] before:absolute before:-bottom-1/2 before:left-0 before:w-full lg:before:opacity-0  lg:hover:before:-translate-y-11 lg:hover:before:opacity-100  before:transition-all">
        <span className="w-full relative block transition-all lg:opacity-100 lg:group-hover:-translate-y-6 lg:group-hover:opacity-0">
          Añadir al carrito
        </span>
      </div>
    </div>
  );
}
