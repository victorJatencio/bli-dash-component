import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../../Cards/cardStyles.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 460,
    minHeight: 175,
    backgroundColor: "#FAFAFA",
    borderRadius: 0
  },
  title: {
    fontSize: 14,
    fontWeight: 600
  },
  pos: {
    marginBottom: 12
  }
});

const CardHeader = styled(CardContent)({
  padding: "0.7rem 1rem"
});

const DefaultCard = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Card className={`${classes.root} card--container`}>
      <CardHeader className="card--header">
        <Typography className={classes.title} variant="body2" component="p">
          {title}
        </Typography>
      </CardHeader>
      <CardContent>
        <div className="card--content">{children}</div>
      </CardContent>
    </Card>
  );
};

DefaultCard.defaultProps = {
  title: "Default Card"
};

DefaultCard.propTypes = {
  title: PropTypes.node.isRequired
};

export default DefaultCard;
