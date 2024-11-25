import { IoLocationOutline } from "react-icons/io5";
import { TbDeviceMobileVibration } from "react-icons/tb";
import { CiAt } from "react-icons/ci";
export default function Page() {
  return (
    <div className="w-full flex flex-col gap-4 p-4 lg:flex-row justify-center items-center">
      <div className="flex-col w-full md:w-2/3 lg:w-1/3">
        <div className="flex flex-col w-full">
          <strong>Dirección:</strong>
          <p className="p-4 border-2 border-solid border-[--text-100] rounded-xl my-4 flex flex-row items-center justify-start">
            <IoLocationOutline size={32}  className="mr-2"/>
            Torres de San Sebastian. Medellín, Antioquia.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <strong>Online</strong>
          <p className="p-4 border-2 border-solid border-[--text-100] rounded-xl my-4">
            <span className="flex flex-row justify-start items-center my-2">
              <TbDeviceMobileVibration size={32} className="mr-2"/>
              +57 318 4255610
            </span>
            <span className="flex flex-row justify-start items-center my-2">
              <CiAt size={32} className="mr-2"/>
              info@sweet-bites.co
            </span>
          </p>
        </div>
        
      </div>
      <iframe
        className=" w-full md:w-1/2"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1706086799813!2d-75.57171072635214!3d6.241232626381917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429935ec02b35%3A0x361f8c9b139a3a2!2sTorres%20de%20San%20Sebasti%C3%A1n!5e0!3m2!1ses!2sco!4v1732545028183!5m2!1ses!2sco"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
