import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from ".";

storiesOf("Button", module).add("Primary", () => (
  <Button buttonType="primary" onClick={action("click")}>
    Hello World
  </Button>
));
