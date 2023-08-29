import { RadioGroup, Radio, cn, Input } from "@nextui-org/react";


interface CustomRadioProps {
  children: React.ReactNode;
  name: string;
  value: string;
}

import React, { useState } from 'react';

const NumberInputWithButtons = () => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="flex flex-row bg-gray-100">
      <input
        type="number"
        className="px-4 py-2 text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500 flex-1 mr-4"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <div className="flex flex-col">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-t hover:bg-blue-600 focus:outline-none"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-b hover:bg-red-600 focus:outline-none"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
};



const CustomRadio: React.FC<CustomRadioProps> = ({ children, name, value }) => {
  return (
    <Radio
      name={name}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between text-sm",
          "flex-row  cursor-pointer gap-2 p-2 border-2 rounded-md border-gray-300 border-solid",
          "data-[selected=true]:border-3 data-[selected=true]:border-[#e60d54]"
        ),
      }}
      value={value}
    >
      {children}
    </Radio>
  );
};

interface FormProps {
  price: string;
  old_pricee: string;
}

function ProductSizes() {
  return (
      <RadioGroup
        name="Taille"
        orientation="horizontal"
        isRequired
        
      >
        <CustomRadio name="Taille" value="190x65" >
          190x65
        </CustomRadio>

        <CustomRadio name="Taille" value="190x70">
          190x70
        </CustomRadio>

        <CustomRadio name="Taille" value="190x80">
          190x80
        </CustomRadio>

        <CustomRadio name="Taille" value="190x90">
          190x90
        </CustomRadio>
      </RadioGroup>

      



     
  );
};

export default ProductSizes;
