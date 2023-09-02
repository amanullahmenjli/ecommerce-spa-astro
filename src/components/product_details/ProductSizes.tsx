import { RadioGroup } from "@nextui-org/react";
import RadioButton from "./RadioButton";

interface Data {
  size: string;
  price: string;
}

interface ProductSizesProps {
  data: Data[]; // Define the 'data' prop here
}

function sizeButton(dta:Data) {
  return (
    <RadioButton name="Taille" value={dta.size} price={dta.price}>
        {dta.size}
    </RadioButton>
  );
}

function ProductSizes(props: ProductSizesProps) {
  return (
    <RadioGroup name="Taille" orientation="horizontal">
      {props.data.map(sizeButton)}
    </RadioGroup>
  );
}

export default ProductSizes;
