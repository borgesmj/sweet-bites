export const metadata = {
    title: "checkout",
    description:
      "Sweet Bites es un negocio familiar dedicado a la creación de horneados caseros, como galletas, brownies, panes y otros dulces.",
  };

export default function Layout({children}) {
    return (
        <section>
            {children}
        </section>
    );
}