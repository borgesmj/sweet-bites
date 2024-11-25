import Image from "next/image";
export default function Page() {
  const sections = [
    {
      title: "¿Quienes somos?",
      content:
        "Sweet Bites es un negocio familiar dedicado a la creación de horneados caseros, como galletas, brownies, panes y otros dulces. Nuestro enfoque está en ofrecer productos de calidad, hechos sin químicos ni estabilizantes, con un sabor único y variado que busca satisfacer los gustos más exigentes. Nos comprometemos a brindar una experiencia de compra agradable y personalizada, desde la navegación en nuestra página web hasta el momento en que nuestros clientes disfrutan del producto en sus hogares.",
      image: "/bakery-shop.png",
    },
    {
      title: "Misión",
      content:
        "Nuestra misión en Sweet Bites es ofrecer productos caseros de alta calidad, elaborados con ingredientes frescos y naturales, que proporcionen una experiencia deliciosa y memorable para nuestros clientes. Nos enfocamos en crear un ambiente de trabajo familiar de apoyo y sincronía, mientras buscamos innovar constantemente en nuestros productos y servicios para mantener la satisfacción de nuestros clientes y fomentar la lealtad a largo plazo.",
      image: "/bread.png",
    },
    {
      title: "Visión",
      content:
        "Ser una empresa referencia en la creación de productos horneados caseros, reconocida por su calidad y variedad, que permita a nuestros clientes disfrutar de sabores únicos. Aspiramos a expandir nuestro catálogo y ofrecer entregas rápidas y eficientes, con el objetivo de mantener una relación cercana y personalizada con nuestros clientes, mientras seguimos innovando y mejorando cada día.",
      image: "/doughnut.png",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4 p-4">
      {sections.map((section, index) => (
        <div key={`section-${index}`} className={`flex flex-col justify-center items-center w-full ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} lg:w-3/4 lg:mx-auto 2xl:w-1/2`}>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold underline underline-offset-2 w-full text-center my-4">
              {section.title}
            </h3>
            <p className="antialiased">
              {section.content}
            </p>
          </div>
          <Image
            src={section.image}
            alt="sweet bites. canasta panes"
            width={250}
            height={250}
            className="w-auto"
          />
        </div>
      ))}
    </div>
  );
}
