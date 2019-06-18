import React from "react";
import PropTypes from "prop-types";

import Rating from "../Rating";
import Avatar from "../Avatar";
import styles from "./styles.module.scss";

const UserInfo = ({
  firstName,
  lastName,
  rating,
  location,
  userStatus,
  avatar,
  classNames
}) => (
  <div className={[styles["userInfo__user"], classNames.container].join(" ")}>
    <Avatar
      imageUrl={avatar}
      className={[styles["userInfo__icon"], classNames.avatar].join(" ")}
    />
    <div className={styles["userInfo__text"]}>
      <span
        className={[styles["userInfo__user-status"], classNames.status].join(
          " "
        )}
      >
        {userStatus}
      </span>
      <br />
      <div
        className={[styles["userInfo__user-name"], classNames.name].join(" ")}
      >
        {firstName + " " + lastName}
      </div>
      <div
        className={[styles["userInfo__user-name"], classNames.location].join(
          " "
        )}
      >
        {location}
      </div>
      <div
        className={[styles["userInfo__rating"], classNames.rating].join(" ")}
      >
        <Rating
          rating={parseFloat(rating)}
          className={styles["userInfo__rating-star"]}
        />
        <span className={styles["userInfo__rating-value"]}>{rating}</span>
      </div>
    </div>
  </div>
);
UserInfo.defaultProps = {
  firstName: "",
  lastName: "",
  rating: undefined,
  location: "",
  classNames: {
    container: "",
    status: "",
    name: "",
    location: "",
    rating: "",
    ratingText: ""
  }
};
UserInfo.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  location: PropTypes.string,
  user_status: PropTypes.string
};

export default UserInfo;
