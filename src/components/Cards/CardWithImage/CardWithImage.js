import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "../../Cards/cardStyles.scss";
import Image from "../../../static/mountain.jpg";

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
  },
  media: {
    height: 240
  }
});

const CardHeader = styled(CardContent)({
  padding: "0.7rem 1rem"
});

const CardWithImage = ({ title }) => {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} card--container`}>
      <CardHeader className="card--header">
        <Typography className={classes.title} variant="body2" component="p">
          {title}
        </Typography>
      </CardHeader>
      <CardContent>
        <div className="card--content">
          <CardMedia className={classes.media} image={Image} title="mountain" />
        </div>
      </CardContent>
    </Card>
  );
};

CardWithImage.defaultProps = {
  title: "Default Card"
};

CardWithImage.propTypes = {
  title: PropTypes.node.isRequired
};

export default CardWithImage;
