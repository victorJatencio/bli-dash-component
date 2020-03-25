import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import "./styles.scss";

const UIbutton = ({ children, buttonType, onClick }) => (
  <Button onClick={onClick} variant="contained" color={buttonType}>
    {children}
  </Button>
);

UIbutton.defaultProps = {
  buttonType: "primary"
};

UIbutton.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.oneOf(["primary", "secondary"])
};

export default UIbutton;
