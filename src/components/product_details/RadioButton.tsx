import {  Radio, cn } from "@nextui-org/react";


interface CustomRadioProps {
    children: React.ReactNode;
    name: string;
    value: string;
  }

const RadioButton: React.FC<CustomRadioProps> = ({ children, name, value }) => {
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

export default RadioButton;