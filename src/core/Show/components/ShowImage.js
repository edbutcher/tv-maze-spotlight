import React from 'react';
import styles from './ShowImage.module.scss';

function ShowImage({ url, alt }) {
  return <img className={styles.image} src={url} alt={alt} />;
}

export default ShowImage;
