import Image from "next/image";
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa";
export default function Hero() {
    const cookiesImages = [
        {
            id: 1,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "absolute -top-12 -left-32 z-[-1]"
        },
        {
            id: 2,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "absolute bottom-[-6rem] right-[-7rem] z-[-1]"
        },
        {
            id: 3,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "hidden md:block absolute bottom-[-12rem] right-[20rem] z-[-1] lg:right-[35rem]"
        },
        {
            id: 4,
            src: "/chocolate-chips-cookie.png",
            alt: "Chocolate chips cookie",
            className: "hidden md:block absolute top-[-7rem] left-[26rem] z-[-1] lg:left-[50rem]"
        },

    ]
    return (
        <section className=" relative w-dvw max-w-dvw h-[--hero-height] flex flex-col justify-center items-center md:h-[600px] overflow-hidden">
            <div className="flex flex-col justify-center items-center">
                <Image src="/Logo-desktop.png" width={350} height={200} alt="Logo hero sweet bites" />
                <h1>Desde nuestra casa a la tuya.</h1>
            </div>
            <Link href="/tienda" className="py-[10px] bg-[--primary-300] h-[50px] flex justify-aound items-center text-[20px] px-[50px] mt-8 font-[600] text-[--bg-100] gap-4">Comprar <FaChevronRight /></Link>
            {
                cookiesImages.map((cookie) => (
                    <Image src="/chocolate-chips-cookie.png" width={300} height={300} alt="Chocolate chips cookie"  className={cookie.className} key={cookie.id}/>
                ))
            }
        </section>
    );
}