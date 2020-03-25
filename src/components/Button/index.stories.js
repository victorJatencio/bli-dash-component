import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import UIbutton from ".";

storiesOf("Buttons|Primary Button", module).add("Primary", () => (
  <UIbutton buttonType="primary" onClick={action("click")}>
    BUTTON
  </UIbutton>
));
