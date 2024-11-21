import Image from "next/image";
import Link from "next/link"
import { RiArrowRightWideFill } from "react-icons/ri";
import { caveat } from "../Fonts/fonts";
export default function Hero() {
    const cookiesImages = [
        {
            id: 1,
            src: "/Header-images/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "block absolute -top-12 -left-20 z-[-1] md:-top-8 md:-left-20 xl:-top-40 xl:-left-40"
        },
        /**
         * 
        {
            id: 2,
            src: "/Header-images/galletas-chispas-chocolate-aisladas.webp",
            alt: "Chocolate chips cookie",
            className: "block absolute -bottom-16 right-[-5rem] z-[-1]"
        },
        {
            id: 3,
            src: "/Header-images/galleta-de-chocolate.webp",
            alt: "Chocolate chips cookie",
            className: "hidden md:block md:absolute md:top-[-4rem] md:right-[-4rem] z-[-1]"
        },
        {
            id: 4,
            src: "/Header-images/galleta-red-velvet.webp",
            alt: "Chocolate chips cookie",
            className: "hidden md:block md:absolute md:bottom-[-6rem] md:left-[-5rem]"
        },
        {
            id: 5,
            src: "/Header-images/galleta-avena-pasas.webp",
            alt: "Chocolate chips cookie",
            className: "hidden xl:block xl:absolute xl:top-[-7rem]"
        },
            */
        

    ]
    return (
        <section className="p-4 relative w-full max-w-full h-[--hero-height] flex flex-col justify-center items-center md:h-[600px] overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <Image src="/logo-hero-desktop.png" width={350} height={100} alt="Logo hero sweet bites" className="w-auto" />
                <h1 className={`${caveat.className} font-[400] text-[2rem] md:text-[3rem]`}>Desde nuestra casa a la tuya.</h1>
            </div>
            <Link href="/tienda" className="py-[10px] bg-[--button-bg-primary] h-[50px] flex justify-around items-center text-[20px] px-[10px] mt-8 font-[600] text-[--bg-100] transition-fast group w-[140pxpx] lg:w-[200px] border-none hover:bg-[--button-bg-primary-hover]">
                <RiArrowRightWideFill className="h-full hidden text-[--bg-100] transition-fast lg:block lg:opacity-0 lg:group-hover:translate-x-6 lg:group-hover:opacity-100"/>
                <span className="transition-fast lg:group-hover:translate-x-6">Comprar</span>
                <RiArrowRightWideFill className="transition-fast lg:opacity-100 lg:group-hover:translate-x-6 h-full text-[--bg-100] lg:group-hover:opacity-0" />
            </Link>
            {
                cookiesImages.map((cookie) => (
                    <Image src={cookie.src} width={500} height={500} alt="Chocolate chips cookie" className={`${cookie.className} w-auto` } key={cookie.id} />
                ))
            }
        </section>
    );
}