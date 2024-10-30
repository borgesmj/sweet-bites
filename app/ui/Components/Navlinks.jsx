import Link from "next/link"

export default function Navlinks() {
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
        <nav className="navbar fixed bg-[--accent-100] top-[var(--mobile-header-height)] h-dvh w-full flex flex-col justify-center items-center gap-4 transition-fast md:static md:flex-row md:h-[var(--mobile-header-height)] md:bg-transparent md:w-[450px] lg">
            {
                navlinks.map((link, index) => (
                    <Link className="w-28 text-center tracking-in-expand-fwd text-[var(--bg-100)] font-[600] text-2xl md:text-[var(--text-200)] md:font-[400] md:text-xl relative before:content-[''] before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:border-solid before:border-b-2 before:border-[--accent-100] before:transition-all hover:before:w-full " key={`link-${index}`} href={link.href}>{link.text}</Link>
                ))
            }
        </nav>
    )
}