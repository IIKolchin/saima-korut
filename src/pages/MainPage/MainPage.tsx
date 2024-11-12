import Header from '../../components/header/Header';
import styles from './MainPage.module.css';
import pictureIntro from '../../assets/images/photo1.png';
import arrowRight from '../../assets/images/arrowRight.svg';
import logo from '../../assets/images/logo.svg';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';
import collection from '../../assets/images/collection.png';
import collection2 from '../../assets/images/collection2.png';
import pictureSeries from '../../assets/images/unsplash_H-dhloI_bss.png';
import Slider from '../../components/slider/slider';
import ImageComponent from '../../components/image-component/image-component';
import Footer from '../../components/footer/footer';
import VideoComponent from '../../components/video-component/video-component';
import video from '../../assets/videos/video1.mp4';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.main}>
      <Header mainPage />
      <section className={styles.intro}>
        <div className={styles.intro_group}>
          {/* <img className={styles.intro_img} src={pictureIntro} alt="" /> */}
          <VideoComponent
            src={video}
            loop
            muted={true}
            autoplay={true}
            width="700px"
            height="500px"
          />
          <img src={logo} alt="" />
        </div>

        <div className={styles.intro_group}>
          <p className={styles.intro_text}>
            Saimaa Korujen syntyyn. Saimaa Korut valmistetaan 925 hopeasta
            Suomessa.
          </p>
          <NavLink to="/korusarjat">
            <button className={styles.intro_button}>kokoelma</button>
          </NavLink>
        </div>
      </section>
      <section className={styles.series}>
        <ul className={styles.series_group}>
          <li className={styles.series_episode}>
            <p>AALLOT A</p>
            <a href="">
              <img className={styles.arrowRright} src={arrowRight} alt="" />
            </a>
          </li>
          <li className={styles.series_episode}>
            <p>PYÖRRE B</p>
            <a href="">
              <img className={styles.arrowRright} src={arrowRight} alt="" />
            </a>
          </li>
          <li className={styles.series_episode}>
            <p>RAILOT C</p>
            <a href="">
              <img className={styles.arrowRright} src={arrowRight} alt="" />
            </a>
          </li>
        </ul>
        <img className={styles.img_series} src={pictureSeries} alt="" />
      </section>
      <section className={styles.slider}>
        <Slider />
      </section>
      <section className={styles.images}>
        <div className={styles.images_group}>
          <ImageComponent src={image2} alt="Image 2" delay={0} />
          <ImageComponent src={image1} alt="Image 1" delay={500} />
          <ImageComponent src={image3} alt="Image 3" delay={1000} />
        </div>
        <h3 className={styles.images_heading}>
          Perinteet kukoistavat kauniissa
        </h3>
        <p className={styles.images_text}>
          Tervetuloa tutustumaan uuteen suomalaiseen käsityöläiseen ja hänen
          koruihinsa, jotka on luotu rakkaudella Suomen luontoon ja jotka
          ilahduttavat sinua milloin tahansa
        </p>
        <NavLink to="/korusarjat">
          <button className={styles.intro_button}>KORUSARJAT</button>
        </NavLink>
      </section>
      <section className={styles.collection}>
        <div className={styles.collection_groups}>
          <div className={styles.collection_group}>
            <NavLink to="/korusarjat">
              <button className={styles.collection_button}>
                <img
                  className={styles.collection_button_img}
                  src={arrowRight}
                  alt=""
                />
              </button>
            </NavLink>
            <p className={styles.collection_button_text}>
              Perinteet ruumiillistuvat kauniissa, moderneissa koruissa, jotka
              kirkastavat suomalaista luontoa
            </p>
          </div>
          <img className={styles.collection_img} src={collection} alt="" />
        </div>
        <div className={styles.collection_groups}>
          <img className={styles.collection_img_2} src={collection2} alt="" />
          <p className={styles.collection_button_text}>
            tämän sivuston sivuilta löydät järvien syvyyden ja metsän tuoksun
            sellaisena kuin ne ovat
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MainPage;
