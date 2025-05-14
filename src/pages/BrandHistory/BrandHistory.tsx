import styles from './BrandHistory.module.css';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/Header';
import about1 from '../../assets/images/about1.png';
import about2 from '../../assets/images/about2.png';
import about3 from '../../assets/images/about3.png';
import about4 from '../../assets/images/about4.png';
import about5 from '../../assets/images/about5.png';
import about6 from '../../assets/images/about6.png';
import { NavLink } from 'react-router-dom';

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
        <div className={styles.text}>
          {/* <p>Suomalaisen Taituruuden Perintö: Matti Suninen,</p>
          <p>Jalokivien Maestro!</p> */}
          <p>
            MATTI SUNINEN OY on vuonna 2000 perustettu jalometallialan yritys
            joka suunnittelee ja valmistaa kaikki korut suomessa, tuotemerkkeinä
            SAIMAA KORUT , KOLI KORUT, MSOY SPEKTROLIITTI ,  ja SAIMAA LIVING
            sisustus tuotteet. näistä linkeistä ( koli korut )  ( msoy
            spektroliitti ) ( saimaa living ) voit tutustua tuotteisiin.  korut
            valmistetaan 100 % kierrätys 925 hopeasta käsityönä taipalsaarella
            suuren jänkäsalon saaressa . 
          </p>
          {/* <p>
            Tämä pieteetillä valmistettujen korujen mestari ei ole vain
            taiteilija, vaan myös kunnioitettu kansalainen ja isänmaanystävä.
            Hänen teoksensa huokuvat rakkautta Suomea ja sen kulttuuria kohtaan.
          </p> */}
        </div>
        <img src={about4} alt="" />
        <div className={styles.img_group}>
          <img className={styles.img5} src={about5} alt="" />
          <img src={about6} alt="" />
        </div>
        <div className={styles.series}>
          <div className={styles.link}>
            <NavLink to="/korusarjat">
              <button className={styles.button}>KORUSARJAT</button>
            </NavLink>
          </div>
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
