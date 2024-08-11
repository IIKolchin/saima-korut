import styles from './footer.module.css';

const Footer = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>OTA YHTEYTTÄ JA KYSY LISÄÄ</h3>
      <p className={styles.text}>
        Matti Suninen Oy, puh. 0400 250 122, info@saimaakorut.fi
        Työmäenniementie 84, 54920 Taipalsaari. y-tunnus: 1581484-0
      </p>
    </section>
  );
};

export default Footer;
