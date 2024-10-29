import Image from "next/image";
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa";
export default function Hero() {
    return (
        <section className=" relative w-dvw h-[--hero-height] flex flex-col justify-center items-center md:h-[600px] ">
            <div className="flex flex-col justify-center items-center">
                <Image src="/Logo-desktop.png" width={350} height={200} alt="Logo hero sweet bites" />
                <h1>Desde nuestra casa a la tuya.</h1>
            </div>
            <Link href="/tienda" className="py-[10px] bg-[--primary-300] h-[50px] flex justify-aound items-center text-[20px] px-[50px] mt-8 font-[600] text-[--bg-100] gap-4">Comprar <FaChevronRight /></Link>
        </section>
    );
}