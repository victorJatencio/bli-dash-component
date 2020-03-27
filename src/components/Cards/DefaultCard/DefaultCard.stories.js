import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import DefaultCard from "../DefaultCard/DefaultCard";

storiesOf("Cards|Default/Default Card", module)
  .addDecorator(withKnobs)
  .add("default", () => <DefaultCard title={text("Card Name", "Card Name")} />);
