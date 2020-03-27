import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import CardWithFooter from "../CardWithFooter/CardFooter";

storiesOf("Cards|Default/Cards", module)
  .addDecorator(withKnobs)
  .add("default footer", () => (
    <CardWithFooter title={text("Card Name", "Simple Card With Footer")} />
  ));
