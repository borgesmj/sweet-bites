import DataService from "@/lib/FirebaseService";
import Image from "next/image";
export default async function Page() {
  const products = await DataService.fetchData();
  const images = await products.filter((product) => {
    return product.images.webp;
  });
  return (
    <>
      <div>
        galeria
      </div>
    </>
  );
}
