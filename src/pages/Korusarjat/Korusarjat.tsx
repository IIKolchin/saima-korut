import styles from './Korusarjat.module.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/Header';
import ProductCard from '../../components/product-card/product-card';
import korut1 from '../../assets/images/korut1.png';
import korut2 from '../../assets/images/korut2.png';
import korut3 from '../../assets/images/korut3.png';
import korut4 from '../../assets/images/korut4.png';

const Korusarjat = () => {
  return (
    <section className={styles.section}>
      <Header />
      <h2 className={styles.heading}>AALLOT A</h2>
      <div className={styles.group}>
        <ProductCard
          img={korut1}
          text={'Aallot korvakorut 306k'}
          price={'69/44€'}
        />
        <ProductCard
          img={korut2}
          text={'Aallot korvakorut 306k'}
          price={'69/44€'}
        />
        <ProductCard
          img={korut3}
          text={'Aallot korvakorut 306k'}
          price={'69/44€'}
        />
        <ProductCard
          img={korut4}
          text={'Aallot korvakorut 306k'}
          price={'69/44€'}
        />
      </div>
      <Footer />
    </section>
  );
};

export default Korusarjat;
