import { IoCartOutline } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import FormField from "@/ui/Forms/FormField";
import FormCalendar from "@/ui/Forms/Form.calendar";
import { useState } from "react";
import { calculateDistance } from "@/lib/CalculateDeliveryFee";
const DeliverOptions = ({
  homeDelivery,
  setHomeDelivery,
  username,
  setUsername,
  phonenumber,
  setPhonenumber,
  message,
  setMessage,
  setAddress,
  address,
  setDeliveryFee,
  setDeliveryDate
}) => {
  return (
    <div id="user-data" className="flex flex-col w-full gap-4">
      {/** Datos principales*/}
      <div id="datos-primarios" className="w-full flex flex-col p-4 gap-4">
        <FormField
          label="Nombre"
          id="username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required={true}
          tabIndex="2"
          value={username}
        />
        <FormField
          label="Teléfono"
          id="phonenumber"
          type="text"
          onChange={(e) => {
            setPhonenumber(e.target.value);
          }}
          required={true}
          tabIndex="3"
          value={phonenumber}
        />
        {/* * * Aqui va el calendario * * */}
        <FormCalendar setDeliveryDate={setDeliveryDate}/>
      </div>
      <div id="options" className="w-full flex flex-row justify-around">
        <div className="w-1/2 flex flex-col items-center gap-3">
          <input
            type="radio"
            name="deliver-type"
            id="deliver-pick-up"
            defaultChecked
            onChange={() => {
              setHomeDelivery(false);
            }}
          />
          <label
            htmlFor="deliver-pick-up"
            className="flex flex-col items-center text-xs md:text-xl lg:text-2xl cursor-pointer"
          >
            Pasar a recoger
            <IoCartOutline size={24} />
          </label>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-3">
          <input
            type="radio"
            name="deliver-type"
            id="deliver-home"
            onChange={() => {
              setHomeDelivery(true);
            }}
            tabIndex="4"
          />
          <label
            htmlFor="deliver-home"
            className="flex flex-col items-center text-xs md:text-xl lg:text-2xl cursor-pointer"
          >
            Entrega a domicilio
            <MdDeliveryDining size={24} />
          </label>
        </div>
      </div>
      {homeDelivery ? (
        <>
          <FormField
            label="Dirección"
            id="direccion"
            type="text"
            required={homeDelivery}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
            tabIndex="5"
          />
          <span className="text-xs text-[red] w-full text-center">
            El servicio a domicilio podria tener un costo adicional.
          </span>
          
        </>
      ) : null}
      <div className="campo w-full flex flex-col md:flex-row md:justify-start">
        <label htmlFor="comentarios" className="w-full text-left p-2 md:w-1/4">
          Mensaje dedicatoria <span className="text-xs">(opcional)</span>:
        </label>
        <textarea
          name=""
          id="comentarios"
          className="w-full text-left outline-none border-b border-[--text-100] bg-transparent focus:bg-[--bg-200] p-2 md:w-1/2"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
      </div>
    </div>
  );
};

export default DeliverOptions;
