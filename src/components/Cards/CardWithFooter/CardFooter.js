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
    borderRadius: 0,
    position: "relative"
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
  padding: "10px"
});

const CardWithFooter = ({ title, children }) => {
  const classes = useStyles();
  return (
    <Card className={`${classes.root} card--container`}>
      <CardHeader className="card--header">
        <Typography className={classes.title} variant="body2" component="p">
          {title}
        </Typography>
      </CardHeader>
      <CardContent>
        <div className="card--content"></div>
      </CardContent>
      <div className="card--footer">{children}</div>
    </Card>
  );
};

CardWithFooter.defaultProps = {
  title: "Simple Card With Footer"
};

CardWithFooter.propTypes = {
  title: PropTypes.node.isRequired
};

export default CardWithFooter;
