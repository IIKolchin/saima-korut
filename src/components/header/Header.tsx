import styles from './Header.module.css';
import basket from '../../assets/images/basket.svg';
import CustomSelectComponent from '../select/select';
import Logo from '../../assets/images/logo_header.svg';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type THeaderProps = {
  mainPage?: boolean;
};

const Header: FC<THeaderProps> = ({ mainPage }) => {
  const { t } = useTranslation();
  return (
    <section className={styles.section}>
      {mainPage && <CustomSelectComponent />}
      {!mainPage && (
        <NavLink to="/">
          <img src={Logo} alt="logo" />
        </NavLink>
      )}
      <NavLink
        to="/korusarjat"
        className={({ isActive }) => (isActive ? styles.active : styles.text)}
      >
        {' '}
        {t('Korusarjat')}
      </NavLink>
      <NavLink
        to="/yhteystiedot"
        className={({ isActive }) => (isActive ? styles.active : styles.text)}
      >
        {t('Yhteystiedot')}
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? styles.active : styles.text)}
      >
        {t('Brändin historia')}
      </NavLink>
      <img className={styles.img} src={basket} alt="icon" />
    </section>
  );
};

export default Header;
