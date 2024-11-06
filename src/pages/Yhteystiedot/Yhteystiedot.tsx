import Footer from '../../components/footer/footer';
import Header from '../../components/header/Header';
import styles from './Yhteystiedot.module.css';
import img from '../../assets/images/collection2.png';
import arrowRight from '../../assets/images/arrowRight.svg';
import collection from '../../assets/images/yhteystiedot.png';
import WhatsAppButton from '../../components/whatsapp-button/whatsapp-button';

const Yhteystiedot = () => {
  return (
    <>
      <Header />
      <section className={styles.section}>
        <img className={styles.preview} src={img} alt=""></img>
        <div className={styles.text}>
          <p>OTA YHTEYTTÄ JA KYSY LISÄÄ</p>
          <p>Matti Suninen Oy, puh. 0400 250 122, info@saimaakorut.fi</p>
          <p>Työmäenniementie 84, 54920 Taipalsaari. </p>
          <p>y-tunnus: 1581484-0</p>
        </div>
        <WhatsAppButton
          phoneNumber="358469425101"
          message="haluan jäätelöä"
        />
        <div className={styles.collection_groups}>
          <div className={styles.collection_group}>
            <button className={styles.collection_button}>
              <img
                className={styles.collection_button_img}
                src={arrowRight}
                alt=""
              />
            </button>
            <p className={styles.collection_button_text}>mene yli KORUSARJAT</p>
          </div>
          <img className={styles.collection_img} src={collection} alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Yhteystiedot;
