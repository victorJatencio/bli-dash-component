import React from "react";
import { storiesOf } from "@storybook/react";
import Product from ".";

storiesOf("Product", module).add("default", () => (
  <Product
    imageUrl="https://www.buyerslab.com/bliQ/Media?id=155839&spec=121356"
    imageAlt="Canon imageRUNNER ADVANCE DX C3730i"
    productName="Canon imageRUNNER ADVANCE DX C3730i"
    productDescription="250-sheet output standard; opt AP1 cassette-feeding unit adds two 550-sheet drawers; opt K1 inner finisher has two trays (500/100), 50-sheet stapling plus stapleless stapling of up to four sheets; opt J1 inner two-way tray (100/250); opt AA1 stapler and booklet finishers have two trays (3,000/250) and stapleless stapling of up to four sheets; booklet finisher V folds up to 20 sheets (80 page booklets); opt hole punch"
  />
));
