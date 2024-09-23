import styles from './Header.module.css';
import basket from '../../assets/images/basket.svg';
import CustomSelectComponent from '../select/select';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section className={styles.section}>
      <CustomSelectComponent />
      <div> Korusarjat</div>
      <div>Yhteystiedot</div>
      <Link to="/about">Brändin historia</Link>
      <img className={styles.img} src={basket} alt="icon" />
    </section>
  );
};

export default Header;
