import DataService from "@/lib/FirebaseService";
import { encodeUrl } from "@/lib/encodeUrl";
export async function generateMetadata({ params }, parent) {
  const name = (await params).name;
  const products = await DataService.fetchData();
  const product = await products.find((product) => {
    return encodeUrl(product.title) == name;
  });
  // * Accedemos a los datos de la pagina padrem en caso de que no encuentre en la actual
  const previousData = await parent;
  const title = product?.title || previousData.title.absolute;
  const description = product?.description || previousData.description;
  const imagesObj = product?.images;
  const imageUrl =
    imagesObj?.webp ||
    imagesObj?.png ||
    "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg";
  const imageAlt = imagesObj?.alt;
  // ! PENDIENTE
  // TODO esa ultima de defecto hay que cambiarla
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: imageUrl,
          alt: imageAlt,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      image: imageUrl,
      imageAlt: imageAlt,
    },
  };
}

export default function Layout({ children }) {
  return <>{children}</>;
}
