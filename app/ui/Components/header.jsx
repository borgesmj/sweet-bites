import BurgerMenu from "./BurgerMenu";
import Image from "next/image";
import Navlinks from "./Navlinks";
import { LuShoppingBag } from "react-icons/lu";
export default function Header() {
    return (
        <header className="fixed top-0 left-0 border-solid border-2 border-(var(--accent-
        100)) w-dvw p-2 flex flex-row justify-around items-center h-[var(--mobile-header-height)]  md:px-8 lg:px-16 bg-[var(--bg-100)] z-10">
            <input type="checkbox" name="" id="burger-chbx" className="hidden" />
            <BurgerMenu />
            <a href="/">
                <Image src="/Logo-mobile.png" width={100} height={50} alt="Logo" className="block lg:hidden" />
                <Image src="/Logo-desktop.png" width={200} height={50} alt="Logo" className="hidden lg:block" />
            </a>
            <Navlinks />
            <div className="relative h-[50px] w-[50px] flex flex-col justify-center items-center  before:bg-red-500 before:absolute before:top-0 before:right-0 before:w-6 before:h-6 before:content-['4'] before:rounded-full before:text-white before:text-center before:font-bold before:text-md cursor-pointer">
                <LuShoppingBag size="2em" />
            </div>

        </header>
    );
}