import Image from "next/image";
import Link from "next/link"
import { RiArrowRightWideFill } from "react-icons/ri";
import { caveat } from "../Fonts/fonts";
export default function Hero() {
    return (
        <section className="hero-section-background p-4 relative w-full max-w-full h-[--hero-height] flex flex-col justify-center items-center md:h-[600px] overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <Image src="/logo-hero-desktop.png" width={350} height={300} alt="Logo hero sweet bites" className="w-auto" />
                <h2 className={`${caveat.className} font-[400] text-base md:text-2xl`}>Desde nuestra casa a la tuya.</h2>
            </div>
            <Link href="/tienda" className="py-[10px] bg-[--button-bg-primary] h-[50px] flex justify-around items-center text-[20px] px-[10px] mt-8 font-bold text-[--bg-100] transition-fast group w-[140pxpx] lg:w-[200px] border-none hover:bg-[--button-bg-primary-hover]">
                <RiArrowRightWideFill className="h-full hidden text-[--bg-100] transition-fast lg:block lg:opacity-0 lg:group-hover:translate-x-6 lg:group-hover:opacity-100"/>
                <span className="transition-fast lg:group-hover:translate-x-6">Comprar</span>
                <RiArrowRightWideFill className="transition-fast lg:opacity-100 lg:group-hover:translate-x-6 h-full text-[--bg-100] lg:group-hover:opacity-0" />
            </Link>
        </section>
    );
}