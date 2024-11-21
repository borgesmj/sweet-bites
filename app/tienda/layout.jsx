export const metadata = {
  title: "Tienda",
  description:
    "Deliciosos horneados caseros como galletas, brownies, panes y más. ¡Haz tu pedido hoy!",
  openGraph: {
    title: "Tienda || Sweet Bites",
    description:
      "Deliciosos horneados caseros como galletas, brownies, panes y más. ¡Haz tu pedido hoy!.",
    url: "https://www.sweetbites.com",
    siteName: "Sweet Bites",
    images: [
      {
        url: "https://www.sweetbites.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sweet Bites - Horneados caseros",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda || Sweet Bites",
    description:
      "Deliciosos horneados caseros como galletas, brownies, panes y más. ¡Haz tu pedido hoy!",
    images: ["https://www.sweetbites.com/twitter-image.jpg"],
  },
};

export default function Layout({ children }) {
  return (
    <>
    {children}
    </>
  );
}
