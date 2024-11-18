import React from "react";

const SizeOption = ({
  index,
  size,
  price,
  selectedIndex,
  setSelectedIndex,
}) => {

  return (
    <div
      className={`whitespace-nowrap min-w-full  p-4 rounded-lg shadow-md flex flex-col items-start md:min-w-[200px] xl:max-w-[250px] cursor-pointer border-solid border-2 ${
        index == selectedIndex
          ? " border-[--accent-100]"
          : "border-transparent"
      }`}
      onClick={() => {
        setSelectedIndex(index);
      }}
    >
      <p className="text-2xl font-medium max-w-full whitespace-normal capitalize">
        {size}
      </p>
      <p className="text-xl">${price}</p>
    </div>
  );
};

export default SizeOption;
