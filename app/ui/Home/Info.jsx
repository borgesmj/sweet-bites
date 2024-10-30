import Image from "next/image";

const infoList = [
    {
        title: "Los mejores ingredientes",
        description: "Utilizamos trozos de chocolate (no virutas), harina de trigo, azúcar de caña y huevos frescos."
    },
    {
        title: "Horneado al día",
        description: "Nuestros productos son frescos y viajan directo desde nuestra cocina a tu mesa."
    },
    {
        title: "Productos sin compromisos",
        description: "Cada día, hacemos todo lo que podemos para elaborar algo que realmente guste a la gente y dejamos que sean ellos los que hablen."
    }
]
export default function Info() {
    return (
        <div className="w-full flex flex-col items-center p-4 md:flex-row-reverse md:justify-around">
            <Image src="/tray-w-coockies.png" width="300" height="300" alt="tray with cookies" className="block xl:hidden" />
            <Image src="/tray-w-coockies.png" width="400" height="400" alt="tray with cookies" className="hidden xl:block" />
            <ul id="home-list" className="p-4 w-[300px] gap-4 flex flex-col xl:w-[400px]">
                {
                    infoList.map((info, index) => (
                        <li key={`info-${index}`} className="list-item justify-center items-start h-fit relative">
                             <span className="w-6 h-6 absolute -left-8 top-8 bg-[url('/asterisk.svg')] bg-no-repeat"></span>
                            <h3 className="text-xl font-bold">{info.title} </h3>
                            <p>{info.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}