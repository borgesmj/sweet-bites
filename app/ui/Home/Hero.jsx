import Image from "next/image";
import Link from "next/link"
import { RiArrowRightWideFill } from "react-icons/ri";
import { caveat } from "../fonts";
export default function Hero() {
    const cookiesImages = [
        {
            id: 1,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "block absolute -top-12 -left-32 z-[-1]"
        },
        {
            id: 2,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "block absolute bottom-[-8rem] right-[-5rem] z-[-1]"
        },
        {
            id: 3,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "hidden md:block md:absolute md:top-[-4rem] md:right-[-4rem] z-[-1]"
        },
        {
            id: 4,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "hidden md:block md:absolute md:bottom-[-6rem] md:left-[-5rem]"
        },
        {
            id: 5,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "hidden xl:block xl:absolute xl:top-[-7rem]"
        },
        {
            id: 6,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "hidden"
        },

    ]
    return (
        <section className=" relative w-dvw max-w-dvw h-[--hero-height] flex flex-col justify-center items-center md:h-[600px] overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <Image src="/Logo-desktop.png" width={350} height={200} alt="Logo hero sweet bites" />
                <h1 className={`${caveat.className} font-[400] text-[2rem] md:text-[3rem]`}>Desde nuestra casa a la tuya.</h1>
            </div>
            <Link href="/tienda" className="py-[10px] bg-[--primary-300] h-[50px] flex justify-around items-center text-[20px] px-[10px] mt-8 font-[600] text-[--bg-100] transition-fast group w-[140pxpx] lg:w-[200px] border-none">
                <RiArrowRightWideFill className="h-full hidden text-[--bg-100] transition-fast lg:block lg:opacity-0 lg:group-hover:translate-x-6 lg:group-hover:opacity-100"/>
                <span className="transition-fast lg:group-hover:translate-x-6">Comprar</span>
                <RiArrowRightWideFill className="transition-fast lg:opacity-100 lg:group-hover:translate-x-6 h-full text-[--bg-100] lg:group-hover:opacity-0" />
            </Link>
            {
                cookiesImages.map((cookie) => (
                    <Image src="/chocolate-chips-cookie.png" width={300} height={300} alt="Chocolate chips cookie" className={cookie.className} key={cookie.id} />
                ))
            }
        </section>
    );
}