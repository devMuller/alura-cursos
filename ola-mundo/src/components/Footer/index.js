import styles from './Footer.module.css';

import { ReactComponent as MarcaRegistrada } from 'assets/imgs/marca_registrada.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MarcaRegistrada /> Desenvolvido por Rafael Muller
    </footer>
  );
};

export default Footer;
