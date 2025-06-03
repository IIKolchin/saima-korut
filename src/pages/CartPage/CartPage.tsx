import React from 'react';
import { useCart } from '../../context/CartContext';
import styles from './CartPage.module.css';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/footer';
import bin from '../../assets/images/bin.svg';
import WhatsAppButton from '../../components/whatsapp-button/whatsapp-button';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert('Спасибо за заказ! (на самом деле ничего не отправлено)');
    clearCart();
  };

  if (cart.length === 0) {
    return <div className={styles.cartEmpty}>🛒 Корзина пуста</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.cartContainer}>
        <h2 className={styles.cartHeading}>Ostoskorisi</h2>
        <div className={styles.cartPoints}>
          <p className={styles.tuote}>tuote</p>
          <div className={styles.points}>
            <p>hinta</p>
            <p>määrä</p>
            <p>kokonais hinta</p>
          </div>
        </div>
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li key={item.id} className={styles.cartItem}>
              <img
                src={item.image}
                alt={item.title}
                className={styles.cartImage}
              />
              {/* <div className={styles.cartDetails}> */}
              <p className={styles.itemTitle}>{item.title}</p>
              <p>{item.price} €</p>
              <p>{item.quantity}</p>
              <p>
                <p>{item.quantity * item.price} €</p>
              </p>
              <button
                onClick={() => removeFromCart(item.id)}
                className={styles.removeBtn}
              >
                <img src={bin} alt="basket" />
              </button>
              {/* </div> */}
            </li>
          ))}
        </ul>

        <div className={styles.cartSummary}>
          {/* <h3 className={styles.totalPrice}>{totalAmount.toFixed(2)} €</h3> */}
          <h3 className={styles.totalPrice}>{totalAmount} €</h3>
          {/* <button onClick={handleCheckout} className={styles.checkoutBtn}>
            Оформить заказ
          </button> */}
          <div className={styles.buttons}>
            <button onClick={clearCart} className={styles.clearBtn}>
              Tyhjennä ostoskori
            </button>
            <WhatsAppButton
              phoneNumber="358469425101"
              message="haluan jäätelöä"
              text="Lähetä WhatsAppiin"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
