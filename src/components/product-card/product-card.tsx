import { FC } from 'react';
import styles from './product-card.module.css';

type TProduct = {
  img: string | undefined;
  text: string;
  price: string;
};

const ProductCard: FC<TProduct> = ({ img, text, price }) => {
  return (
    <div className={styles.section}>
      <img className={styles.img} src={img} alt="jewerly." />
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>{price}</p>
      <button className={styles.button}>Lisää ostoskoriin</button>
    </div>
  );
};

export default ProductCard;
