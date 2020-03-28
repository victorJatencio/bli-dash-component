import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import CardWithText from "../CardWithText/CardWithText";

storiesOf("Cards|Default/Cards", module)
  .addDecorator(withKnobs)
  .add("default with text", () => (
    <CardWithText title={text("Card Name", "Card With Text")} />
  ));
