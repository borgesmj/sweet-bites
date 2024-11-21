export const metadata = {
    title: "Contacto",
    description:
      "Sweet Bites es un negocio familiar dedicado a la creación de horneados caseros, como galletas, brownies, panes y otros dulces.",
    openGraph: {
      title: "Contacto || Sweet Bites",
      description:
        "Sweet Bites es un negocio familiar dedicado a la creación de horneados caseros, como galletas, brownies, panes y otros dulces.",
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
      title: "Contacto || Sweet Bites",
      description:
        "Sweet Bites es un negocio familiar dedicado a la creación de horneados caseros, como galletas, brownies, panes y otros dulces.",
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
  