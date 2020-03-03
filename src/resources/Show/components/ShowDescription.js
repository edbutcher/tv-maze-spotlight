import React from "react";
import styles from './ShowDescription.module.scss';

function createMarkup(markup) {
  return { __html: markup };
}

function ShowDescription({ text, isHtml }) {
  if (isHtml) {
    return <div className={styles.description} dangerouslySetInnerHTML={createMarkup(text)}></div>;
  }
  return <p>{text}</p>;
}

export default ShowDescription;
