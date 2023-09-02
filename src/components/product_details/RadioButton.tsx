import {  Radio, cn } from "@nextui-org/react";


interface CustomRadioProps {
    children: React.ReactNode;
    name: string;
    value: string;
    price: string
  }

const RadioButton: React.FC<CustomRadioProps> = ({ children, name, value, price }) => {
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
        onClick={() => {
          const q = parseInt(document.getElementById('quantity')!.value);
          document.getElementById('initial_price')!.value = price;
          document.getElementById('final_price')!.innerHTML = parseInt(price) * q + ' DT';
          document.getElementById('old_price')!.innerHTML = parseInt(price) * q * 2 + ' DT';
        }}
      >
        {children}
      </Radio>
    );
};

export default RadioButton;