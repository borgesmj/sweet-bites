import { caveat } from "../fonts";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiArrowRightWideFill } from "react-icons/ri";
import Image from "next/image";
export default function Socials() {

    return (
        <div className="w-full bg-[--accent-100] text-[--bg-100] py-4 px-3 flex flex-row justify-center">
            <div className="pictures hidden lg:flex lg:relative lg:w-[450px] lg:justify-center lg:items-center ">
                <Image src="/chocolate-cookies.png" alt="cookies" width="400" height="400" className="" />
            </div>
            <div className="sociales flex flex-col gap-4 w-full lg:w-[500px] items-center justify-center ">
                <h2 className="font-[700] text-[25px] text-center uppercase md:text-[30px]">
                    Sweet Bites en Sociales
                </h2>
                <p className={`${caveat.className} text-[30px] w-full text-center  md:mx-auto md:w-2/3 leading-8`}>La mejor manera de soñar con nuestros productos mientras almuerza.</p>
                <div className="links flex flex-row justify-between w-full  md:justify-around md:m-auto b">
                    <a target="_blank" href="" className="flex flex-col gap-2 justify-center items-center  p-4 group">
                        <span className="bg-white flex justify-center items-center w-[50px] h-[50px] rounded-full text-[--accent-100]">
                            <FaFacebookF size="2em" />
                        </span>
                        <div className="flex flex-row items-center gap-2 p-4 h-6 ">
                            <RiArrowRightWideFill size="1.5em" className="hidden lg:block transition-fast lg:opacity-0 lg:group-hover:translate-x-6 lg:group-hover:opacity-100" />
                            <span className="text-white font-[600] group-hover:translate-x-6 transition-fast">Facebook</span>
                            <RiArrowRightWideFill size="1.5em" className="transition-fast lg:opacity-100 lg:group-hover:translate-x-6 lg:group-hover:opacity-0" />
                        </div>
                    </a>  
                    <a target="_blank" href="" className="flex flex-col gap-2 justify-center items-center  p-4 group">
                        <span className="bg-white flex justify-center items-center w-[50px] h-[50px] rounded-full text-[--accent-100]">
                            <FaInstagram size="2em" />
                        </span>
                        <div className="flex flex-row items-center gap-2 p-4 h-6 ">
                            <RiArrowRightWideFill size="1.5em" className="hidden lg:block transition-fast lg:opacity-0 lg:group-hover:translate-x-6 lg:group-hover:opacity-100" />
                            <span className="text-white font-[600] group-hover:translate-x-6 transition-fast">Instagram</span>
                            <RiArrowRightWideFill size="1.5em" className="transition-fast lg:opacity-100 lg:group-hover:translate-x-6 lg:group-hover:opacity-0" />
                        </div>
                    </a>                     
                </div>
            </div>
        </div>
    );
}