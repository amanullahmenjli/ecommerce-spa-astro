import React, { useState } from 'react';
import RadioButton from './RadioButton';

interface Data {
  size: string;
  price: string;
}

interface ProductSizesProps {
  data: Data[];
}

function ProductSizes(props: ProductSizesProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeChange = (sizeValue: string) => {
    setSelectedSize(sizeValue);
  };

  return (
    <div className='gap-2 flex flex-row flex-wrap'>
      {props.data.map((size, index) => (
        <RadioButton
          key={index}
          name="Taille"
          value={size.size}
          price={size.price}
          selectedValue={selectedSize}
          onChange={handleSizeChange}
        >
          {size.size}
        </RadioButton>
      ))}
    </div>
  );
}

export default ProductSizes;
