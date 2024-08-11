import React, { useEffect, useRef, useState } from 'react';
import styles from './slider.module.css';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import slide1 from '../../assets/images/unsplash_UBeNYvk6ED0.png';
import slide2 from '../../assets/images/photo1705856608 (1) 2.png';
import slide3 from '../../assets/images/unsplash_pjrPWwwYx1I.png';
import arrowRight from '../../assets/images/arrowRight.svg';
import arrowLeft from '../../assets/images/arrowLeft.svg';
import { NavigationOptions } from 'swiper/types/modules/navigation';

const Slider: React.FC = () => {
  const [showPrev, setShowPrev] = useState(false);
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  console.log(showPrev);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      setShowPrev(swiper.activeIndex > 0);
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      setShowPrev(swiper.activeIndex > 0);
    }
  }, []);

  return (
    <div className="swiper-wrapper">
      <Swiper
        className={styles.customSwiper}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        ref={swiperRef}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper: SwiperClass) => console.log(swiper)}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper: SwiperClass) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          if (navigation) {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
      >
        <SwiperSlide className={styles.slide}>
          <img className={styles.img} src={slide1} alt="" />
          <p className={styles.text}>suosittu malli 53€</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img className={styles.img} src={slide2} alt="" />
          <p className={styles.text}>suosittu malli 53€</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img className={styles.img} src={slide3} alt="" />
          <p className={styles.text}>suosittu malli 53€</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img className={styles.img} src={slide1} alt="" />
          <p className={styles.text}>suosittu malli 53€</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img className={styles.img} src={slide2} alt="" />
          <p className={styles.text}>suosittu malli 53€</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img className={styles.img} src={slide3} alt="" />
          <p className={styles.text}>suosittu malli 53€</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img className={styles.img} src={slide1} alt="" />
          <p className={styles.text}>suosittu malli 53€</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img className={styles.img} src={slide2} alt="" />
          <p className={styles.text}>suosittu malli 53€</p>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img className={styles.img} src={slide3} alt="" />
          <p className={styles.text}>suosittu malli 53€</p>
        </SwiperSlide>

        <div
          ref={prevRef}
          className={`${styles.customSwiperButtonPrev} ${showPrev ? styles.show : styles.hide}`}
        >
          <img className={styles.buttonNext} src={arrowLeft} alt="" />
        </div>
      </Swiper>
      <div ref={nextRef} className={styles.customSwiperButtonNext}>
        <img className={styles.buttonNext} src={arrowRight} alt="" />
      </div>
    </div>
  );
};

export default Slider;
