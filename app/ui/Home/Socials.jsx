import { caveat } from "../fonts";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { RiArrowRightWideFill } from "react-icons/ri";
import Image from "next/image";
export default function Socials() {

    return (
        <div className="w-full bg-[--accent-100] text-[--bg-100] py-4 px-3 flex flex-col items-center lg:flex-row justify-center relative lg:justify-end">
            <div className="pictures lg:flex lg:w-[450px] lg:justify-center lg:items-center lg:absolute lg:left-4 top-0 xl:left-12 2xl:left-[8rem]">
                <Image src="/chocolate-cookies.png" alt="cookies" width="400" height="400" className="hidden lg:block [filter:_drop-shadow(2px_2px_2px_#ffffff)]" />
                <Image src="/chocolate-cookies.png" alt="cookies" width="200" height="200" className="block lg:hidden [filter:_drop-shadow(2px_2px_2px_#ffffff)]" />
            </div>
            <div className="sociales flex flex-col gap-4 w-full lg:w-[600px] items-center justify-center  lg:flex-row xl:w-1/2 xl:mr-20 2xl:mr-40">
                <div className=" w-full flex flex-col gap-4 md:w-2/3">
                    <h2 className="font-[700] text-[25px] text-center uppercase md:text-[30px]">
                        Sweet Bites en Sociales
                    </h2>
                    <p className={`${caveat.className} text-[30px] w-full text-center  md:mx-auto  leading-8`}>La mejor manera de soñar con nuestros productos mientras almuerza.</p>
                </div>
                <div className="links w-4/5 flex flex-row justify-between md:justify-around md:m-auto b  md:w-1/2 lg:w-[200px] lg:flex-col">
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