import { useParams, Link } from 'react-router-dom';
import styles from './JewerlyDetailPage.module.css';
import { jewelryItems } from '../../data/jewerly';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // можно использовать иконки или символы
import Header from '../../components/header/Header';
import arrowRight from '../../assets/images/arrowRight.svg';
import collection from '../../assets/images/collection1.png';
import Footer from '../../components/footer/footer';
import { useCart } from '../../context/CartContext';

const JewelryDetailPage = () => {
  const { id } = useParams();
  const item = jewelryItems.find((j) => j.id === id);
  const { addToCart } = useCart();

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!item)
    return <div className="p-8 text-center text-red-500">Товар не найден</div>;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Header />
      <div className="p-8 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
        <div className={styles.section}>
          <div className="flex-1 relative group">
            <div className={styles.imageContainer}>
              <img
                src={item.images[currentIndex]}
                alt={item.name}
                className={styles.full_img}
              />

              <button
                onClick={handlePrev}
                className={`${styles.arrow} ${styles.leftArrow}`}
              >
                <ChevronLeft size={36} />
              </button>

              <button
                onClick={handleNext}
                className={`${styles.arrow} ${styles.rightArrow}`}
              >
                <ChevronRight size={36} />
              </button>
            </div>

            <div className={styles.images}>
              {item.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  className={`${styles.img} ${
                    currentIndex === index ? styles.img_border : styles.img
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          <div className={styles.info}>
            <h1 className={styles.h1}>{item.series}</h1>
            <h2 className={styles.h2}>{item.name}</h2>
            <p className={styles.p}>{item.material}</p>
            <p className={styles.p}>väri: {item.color}</p>
            <div className={styles.p}>{item.price.toLocaleString()} €</div>
          </div>
          <button
            onClick={() =>
              addToCart({
                id: item.id,
                title: item.name,
                image: item.images[0],
                price: item.price,
                quantity: 1,
              })
            }
          >
            Добавить в корзину
          </button>
        </div>
      </div>
      <div className={styles.collection_groups}>
        <Link to="/korusarjat" className={styles.collection_group}>
          <button className={styles.collection_button}>
            <img
              className={styles.collection_button_img}
              src={arrowRight}
              alt=""
            />
          </button>
          <p className={styles.collection_button_text}>
            palaa edelliselle sivulle
          </p>
        </Link>
        <img className={styles.collection_img} src={collection} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default JewelryDetailPage;
