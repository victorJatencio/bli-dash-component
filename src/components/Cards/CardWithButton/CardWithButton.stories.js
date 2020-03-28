import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import CardWithButton from "../CardWithButton/CardWithButton";

storiesOf("Cards|Default/Cards", module)
  .addDecorator(withKnobs)
  .add("default with button", () => (
    <CardWithButton title={text("Card Name", "Card With Button")} />
  ));
