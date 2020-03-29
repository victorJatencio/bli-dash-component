import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import UserAvatar, { COLORS } from ".";

storiesOf("UserAvatar", module)
  .addDecorator(withKnobs)
  .add("default", () => (
    <UserAvatar
      firstName={text("First Name", "John")}
      lastName={text("Last Name", "Doe")}
      color={select("Color", COLORS, COLORS[0])}
    />
  ));
