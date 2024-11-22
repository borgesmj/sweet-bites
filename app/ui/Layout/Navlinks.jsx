import Link from "next/link"
export default function Navlinks({animatedLink, pathName}) {
    const navlinks = [
        {
            href: "/tienda",
            text: "Tienda"
        },
        {
            href: "/nosotros",
            text: "Nosotros"
        },
        {
            href: "/contacto",
            text: "Contacto"
        },
        {
            href: "/galeria",
            text: "Galería"
        },
    ]
    return (
        <nav className="navbar fixed bg-[--accent-100] top-[var(--header-height)] h-dvh w-full flex flex-col justify-center items-center gap-4 transition-fast md:static md:flex-row md:h-[var(--mobile-header-height)] md:bg-transparent md:w-[--navbar-width-md] lg:w-[--navbar-width-lg]">
            {
                navlinks.map((link, index) => (
                    <Link className={`w-28 text-center ${animatedLink ? "scale-in-top" : ""} text-[var(--bg-100)] font-[600] text-xl md:text-[var(--text-200)] md:font-[400] md:text-base relative before:content-[''] before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:border-solid before:border-b-2 before:border-[--accent-100] before:transition-all hover:before:w-full ${pathName === link.href ? "before:w-full text-bold" : ""}`} key={`link-${index}`} href={link.href}>{link.text}</Link>
                ))
            }
        </nav>
    )
}