import Image from "next/image";
import Asterisk from "@/ui/Icons/Asterisk"

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
        <div className="w-full flex flex-col items-center p-4 md:flex-row-reverse md:justify-around gap-4">
            <Image src="/tray-w-coockies.png" width="300" height="300" alt="tray with cookies" className="block xl:hidden" />
            <Image src="/tray-w-coockies.png" width="400" height="400" alt="tray with cookies" className="hidden xl:block" />
            <div id="info-list" className="flex flex-col w-full md:w-1/2">
                {
                    infoList.map((info, index) => (
                        <div key={`info-${index}`} className="info-card w-full flex flex-col gap-2 p-4  lg:flex-row lg:items-center">
                            <span className="w-full flex justify-center items center lg:w-10">
                                <Asterisk />
                            </span>
                            <div className="flex flex-col items-start justify center">
                                <h3 className="font-[600] text-[20px] lg:text-[30px]">{info.title}</h3>
                                <p>{info.description}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}