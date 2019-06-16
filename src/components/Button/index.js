import React from "react";
import ButtonMaterial from "@material-ui/core/Button";
import styles from "./styles.module.scss";
console.log(styles);
const Button = ({ children, onClick, ...props }) => (
  <ButtonMaterial
    variant="contained"
    color="primary"
    onClick={onClick}
    {...props}
    className={styles.button}
  >
    {children}
  </ButtonMaterial>
);

export default Button;
