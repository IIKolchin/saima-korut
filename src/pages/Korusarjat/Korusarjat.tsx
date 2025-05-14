import styles from './Korusarjat.module.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/Header';
import ProductCard from '../../components/product-card/product-card';

import { jewelryItems } from '../../data/jewerly';

const Korusarjat = () => {
  return (
    <section>
      <Header />
      <div className={styles.section}>
        <h2 className={styles.heading}>AALLOT A</h2>
        <div className={styles.group}>
          {/* <ProductCard
            image={korut1}
            text={'Aallot korvakorut 306k'}
            price={'69/44€'}
          /> */}
          {jewelryItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <h2 className={styles.heading}>AALLOT B</h2>
        <div className={styles.group}>
          {jewelryItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <h2 className={styles.heading}>AALLOT C</h2>
        <div className={styles.group}>
          {jewelryItems.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Korusarjat;
