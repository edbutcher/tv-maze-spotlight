import React from "react";
import styles from "./ShowTitle.module.scss";

function ShowTitle({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
}

export default ShowTitle;
