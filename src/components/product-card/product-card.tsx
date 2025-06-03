import { FC } from 'react';
import styles from './product-card.module.css';
import { JewelryItem } from '../../types/jewerly';
import { Link } from 'react-router-dom';

type Props = {
  item: JewelryItem;
};

const ProductCard: FC<Props> = ({ item }) => {
  return (
    <section className={styles.section}>
      <Link to={`/korusarjat/${item.id}`} className={styles.link}>
        <img className={styles.img} src={item.images[0]} alt="jewerly." />
        <p className={styles.text}>{item.description}</p>
        <p className={styles.price}>{item.price}</p>
      </Link>
      <button className={styles.button}>Lisää ostoskoriin</button>
    </section>
  );
};

export default ProductCard;
