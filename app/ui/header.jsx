import BurgerMenu from "./Components/BurgerMenu";
import Image from "next/image";
import ShoppingBag from "./icons/ShoppingBag";
import Navlinks from "./Components/Navlinks";
export default function Header() {
    return (
        <header className="border-sold border-[1px] border-(var(--accent-
        100)) w-dvw p-2 flex flex-row justify-around items-center h-[var(--mobile-header-height)]  md:px-8 lg:px-16">
            <input type="checkbox" name="" id="burger-chbx" className="hidden" />
            <BurgerMenu />
            <a href="/">
                <Image src="/Logo.png" width={100} height="50" alt="Logo" className="" />
            </a>
            <Navlinks />
            <ShoppingBag />

        </header>
    );
}