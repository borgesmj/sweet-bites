import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {

    const navlinks = [
        {
            href: "/tienda",
            text: "Tienda"
        },
        {
            href: "/galeria",
            text: "Galería"
        },
        {
            href: "/nosotros",
            text: "Nosotros"
        },
        {
            href: "/contacto",
            text: "Contacto"
        }
    ]
    return (
        <footer className="flex flex-col px-4 py-8 w-full lg:mt-12 2xl:w-1/2 2xl:mx-auto">
            <div className="fast-links-container flex flex-col items-center gap-8 w-full  md:flex-row md:gap-0 md:justify-around">
                <Image src="/Logo-mobile.png" width="200" height="200" alt="Sweet bites logo" className="w-auto" />
                <div className="links flex flex-wrap justify-center items gap-2  w-2/3  md:w-1/2 md:gap-0 lg:gap-2">
                    {
                        navlinks.map((link, index) => (
                            <a className="text-xs underline underline-offset-8 text-center text-[--button-bg-primary] px-2 w-28 md:text-xs md:w-fit lg:no-underline lg:relative lg:before:content-[''] lg:before:absolute lg:before:before:top-0 lg:before:left-0 lg:before:w-0 lg:before:h-full lg:before-border-solid lg:before:border-b-2 lg:before:border-b-[--button-bg-primary] before:transition-all lg:hover:before:w-full" key={`footer-link-${index}`} href={link.href}>{link.text}</a>
                        ))
                    }
                </div>
                <div className="flex flex-row justify-around items-center w-full md:flex-col md:w-10 md:gap-4  xl:flex-row xl:w-fit xl:gap-4">
                    <a className="text-center  text-[--button-bg-primary] p-2 border-solid border-2 border-[--button-bg-primary] rounded-lg transition-all hover:bg-[--button-bg-primary] hover:border-[--bg-100] hover:text-[--bg-100]" href="#"><FaFacebookF size={20} /></a>
                    <a className="text-center  text-[--button-bg-primary] p-2 border-solid border-2 border-[--button-bg-primary] rounded-xl transition-all hover:bg-[--button-bg-primary] hover:border-[--bg-100] hover:text-[--bg-100]" href="#"><FaInstagram size={20} /></a>
                </div>
            </div>
            <p className="text-center text-sm mt-4 text-gray-400">&copy; {new Date().getUTCFullYear()} Sweet Bites. Todos los derechos reservados.</p>
        </footer>
    );
}