import styles from './Header.module.css';
import basket from '../../assets/images/basket.svg';
import CustomSelectComponent from '../select/select';

const Header = () => {
	
return (
    <section className={styles.section}>
        <CustomSelectComponent />
        <div> Korusarjat</div>
        <div>Yhteystiedot</div>
        <div>Brändin historia</div>
        <img className={styles.img} src={basket} alt='icon' />
    </section>
)
};

export default Header;