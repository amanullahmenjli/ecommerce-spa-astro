import { RadioGroup } from "@nextui-org/react";
import RadioButton from "./RadioButton";




function ProductSizes() {
  return (
      <RadioGroup name="Taille" orientation="horizontal" isRequired>
        <RadioButton name="Taille" value="190x65" >
          190x65
        </RadioButton>

        <RadioButton name="Taille" value="190x70">
          190x70
        </RadioButton>

        <RadioButton name="Taille" value="190x80">
          190x80
        </RadioButton>

        <RadioButton name="Taille" value="190x90">
          190x90
        </RadioButton>
      </RadioGroup>

      



     
  );
};

export default ProductSizes;
