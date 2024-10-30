import Image from "next/image";
import { RiArrowRightWideFill } from "react-icons/ri";
export default function Template() {
    return (
        <div className="whitespace-nowrap w-[300px] p-4 bg-[--bg-200] flex flex-col gap-4 justify-center items-start">
            <Image src="/cookies.jpg" width="300"height="200" alt="Chocolate chips cookie"/>
            <div className="flex flex-col w-full">
                <h2 className="text-2xl font-[600] max-w-full">Galleta de chocolates</h2>
                <p className="max-w-full  h-fit overflow-hidden text-ellipsis whitespace-normal max-h-[75px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quidem.</p>
            </div>
            <a href="#" className="w-full flex flex-row gap-2 items-center justify-start text-blue-800 font-[500]"><span>Ver mas</span><RiArrowRightWideFill/></a>
            <p className="text-2xl font-[600] max-w-full">$15.000</p>
            <div className="w-full bg-[--primary-300] py-4 px-6 text-center rounded-xl text-white font-bold cursor-pointer opacity-90 lg:opacity-80 transition-fast lg:hover:opacity-100">Añadir al carrito</div>
        </div>
    );
}