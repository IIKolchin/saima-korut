import { FC } from 'react';
import styles from './product-card.module.css';
import { JewelryItem } from '../../types/jewerly';
import { Link } from 'react-router-dom';

type Props = {
  item: JewelryItem;
};

const ProductCard: FC<Props> = ({ item }) => {
  return (
    <Link to={`/korusarjat/${item.id}`} className={styles.section}>
      <img className={styles.img} src={item.images[0]} alt="jewerly." />
      <p className={styles.text}>{item.description}</p>
      <p className={styles.price}>{item.price}</p>
      <button className={styles.button}>Lisää ostoskoriin</button>
    </Link>
  );
};

export default ProductCard;
