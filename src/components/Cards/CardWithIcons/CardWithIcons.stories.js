import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import CardWithIcons from "../CardWithIcons/CardWithIcons";

storiesOf("Cards|Default/Cards", module)
  .addDecorator(withKnobs)
  .add("card with Icons", () => (
    <CardWithIcons title={text("Card Name", "Simple Card With Icons")} />
  ));
