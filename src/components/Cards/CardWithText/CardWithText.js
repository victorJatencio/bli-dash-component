import React from "react";

import Typography from "@material-ui/core/Typography";
import DefaultCard from "../DefaultCard/DefaultCard";

const CardWithText = () => (
  <DefaultCard title="Card With Text">
    <Typography variant="h6" gutterBottom>
      Some Title
    </Typography>
    <Typography variant="body2" gutterBottom>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem illo iusto
      deserunt. Ducimus illo commodi veniam accusamus officiis porro impedit
      exercitationem, consequuntur placeat nostrum nesciunt, eius expedita,
      officia ullam harum.
    </Typography>
  </DefaultCard>
);

export default CardWithText;
