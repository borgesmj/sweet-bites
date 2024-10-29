export default function BurgerMenu() {
    return (
        <label htmlFor="burger-chbx" className="h-6 w-6 flex flex-col justify-between burgerchbx-checked:bg-green-500 transition-fast md:hidden" id="burger-menu">
            <span className="w-full h-0 border-solid border-b-2 border-[var(--accent-100)] transition-fast"></span>
            <span className="w-full h-0 border-solid border-b-2 border-[var(--accent-100)] transition-fast"></span>
            <span className="w-full h-0 border-solid border-b-2 border-[var(--accent-100)] transition-fast"></span>
        </label>
    );
}