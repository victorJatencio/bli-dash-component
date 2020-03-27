import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Popover from "@material-ui/core/Popover";
import "../../Cards/cardStyles.scss";

const useStyles = makeStyles(theme => ({
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
  },
  typography: {
    padding: theme.spacing(2),
    fontSize: 14
  },
  paper: {
    backgroundColor: "#151515",
    color: "#fff",
    fontSize: 14,
    borderRadius: 2,
    maxWidth: 300
  }
}));

const CardHeader = styled(CardContent)({
  padding: "0.7rem 1rem"
});

const CardWithIcons = ({ title, children }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Card className={`${classes.root} card--container`}>
      <CardHeader className="card--header">
        <div className="card--icons-container">
          <IconButton onClick={handleClick}>
            <HelpOutlineIcon style={{ fontSize: 18 }} />
          </IconButton>
          <Popover
            id={id}
            classes={{
              paper: classes.paper
            }}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Typography className={classes.typography}>
              <strong>The content of the Popover.</strong>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Popover>

          <IconButton>
            <Clear style={{ fontSize: 18 }} />
          </IconButton>
        </div>
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

CardWithIcons.defaultProps = {
  title: "Card With Icons"
};

CardWithIcons.propTypes = {
  title: PropTypes.node.isRequired
};

export default CardWithIcons;
