import styles from './BrandHistory.module.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/Header';
import about1 from '../../assets/images/about1.png';
import about2 from '../../assets/images/about2.png';
import about3 from '../../assets/images/about3.png';
import about4 from '../../assets/images/about4.png';
import about5 from '../../assets/images/about5.png';
import about6 from '../../assets/images/about6.png';

const BrandHistory = () => {
  return (
    <>
      <Header />
      <section className={styles.about}>
        <div className={styles.img_group}>
          <img className={styles.img1} src={about1} alt="" />
          <img className={styles.img2} src={about2} alt="" />
          <img className={styles.img3} src={about3} alt="" />
        </div>
        <p className={styles.text}>
          Suomalaisen Taituruuden Perintö: Matti Suninen, Jalokivien Maestro!
          Matti Suninen, suomalainen jalokivitaiteilija ja kellojen taituri,
          kantaa sydämessään rikasta tarinaa ja perinnettä, joka on solminut
          hänet suomalaisen taidetuotannon ytimeen. Hän ei ole pelkästään
          koruntekijä, vaan elävä perintö, joka on omistanut elämänsä sukunsa
          perinteen jatkamiselle. Tämä pieteetillä valmistettujen korujen
          mestari ei ole vain taiteilija, vaan myös kunnioitettu kansalainen ja
          isänmaanystävä. Hänen teoksensa huokuvat rakkautta Suomea ja sen
          kulttuuria kohtaan.
        </p>
        <img src={about4} alt="" />
        <div className={styles.img_group}>
          <img className={styles.img5} src={about5} alt="" />
          <img src={about6} alt="" />
        </div>
        <div className={styles.series}>
          <button className={styles.button}>KORUSARJAT</button>
          <p className={styles.images_text}>
            Tervetuloa tutustumaan uuteen suomalaiseen käsityöläiseen ja hänen
            koruihinsa, jotka on luotu rakkaudella Suomen luontoon ja jotka
            ilahduttavat sinua milloin tahansa
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BrandHistory;
