export default function BurgerMenu({animateLink}) {

    const handleClick = ()=> {
        animateLink()
    }
    return (
        <label htmlFor="burger-chbx" className="h-6 w-6 flex flex-col justify-between burgerchbx-checked:bg-green-500 transition-fast md:hidden" id="burger-menu" onClick={handleClick}>
            <span className="w-full h-0 border-solid border-b-2 border-[--button-bg-sumary] transition-fast"></span>
            <span className="w-full h-0 border-solid border-b-2 border-[--button-bg-sumary] transition-fast"></span>
            <span className="w-full h-0 border-solid border-b-2 border-[--button-bg-sumary] transition-fast"></span>
        </label>
    );
}