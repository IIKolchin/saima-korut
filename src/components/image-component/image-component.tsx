import React, { useState } from 'react';
import styles from './image-component.module.css';
import { useInView } from 'react-intersection-observer';

type ImageComponentProps = {
  src: string;
  alt: string;
  delay: number;
};

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    if (inView) {
      setTimeout(() => setVisible(true), delay);
    }
  }, [inView, delay]);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`${styles.image} ${visible ? styles.visible : ''}`}
      style={{ transition: `opacity 1s ease-in-out ${delay}ms` }}
    />
  );
};

export default ImageComponent;