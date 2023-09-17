import type React from 'react';

interface CustomRadioProps {
  children: React.ReactNode;
  name: string;
  value: string;
  price: string;
  selectedValue: string | null;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<CustomRadioProps> = ({
  children,
  name,
  value,
  price,
  selectedValue,
  onChange,
}) => {
  const isSelected = selectedValue === value;

  // Use onChange event handler for radio input
  const handleRadioChange = () => {
    onChange(value);
  };

  return (
    <label htmlFor={value}>
      <div
        className={` inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between text-sm flex-row cursor-pointer gap-2 p-2 border-2 rounded-md border-gray-300 ${
          isSelected ? 'border-3 border-primary' : 'border-solid'
        }`}
      >
        <input
          type="radio"
          className='radio radio-sm radio-primary'
          name={name}
          id={value}
          value={value}
          onChange={handleRadioChange} 
          checked={isSelected}
        />
        <span className='text-lg font-medium'>
          {children}
        </span>
      </div>
    </label>
  );
};

export default RadioButton;
