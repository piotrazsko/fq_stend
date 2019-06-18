import React from "react";
import styles from "./styles.module.scss";
import classes from "classnames";

const Avatar = ({ imageUrl, className }) => (
  <div
    style={
      imageUrl
        ? {
            backgroundImage: `url(${imageUrl})`
          }
        : null
    }
    className={classes(styles.icon, styles.iconDefault, className)}
  />
);

export default Avatar;
