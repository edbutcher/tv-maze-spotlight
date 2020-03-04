import React from 'react';
import styles from './ShowDescription.module.scss';

function createMarkup(markup) {
  return { __html: markup };
}

function ShowDescription({ text, isHtml, ...props }) {
  const testId = props['data-testid'] ? props['data-testid'] : null;

  if (isHtml) {
    return (
      <div
        data-testid={testId}
        className={styles.description}
        dangerouslySetInnerHTML={createMarkup(text)}
      ></div>
    );
  }

  return <p data-testid={testId}>{text}</p>;
}

export default ShowDescription;
