import React from "react";

import { storiesOf } from "@storybook/react";
import Title from ".";

storiesOf("Test|Title", module).add("default", () => (
  <Title>This is a title</Title>
));
