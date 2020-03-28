import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import CardWithImage from "../CardWithImage/CardWithImage";

storiesOf("Cards|Default/Cards", module)
  .addDecorator(withKnobs)
  .add("default with image", () => (
    <CardWithImage title={text("Card Name", "Card With Image")} />
  ));
