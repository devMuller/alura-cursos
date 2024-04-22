import styles from './Banner.module.css';

import Ciruclo from 'assets/imgs/circulo_colorido.png';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.text}>
        <h1 className={styles.title}>Olá, mundo!</h1>
        <p className={styles.paragraph}>
          Boas vindas ao meu espaço pessoal! Eu sou Rafael Muller. Aqui
          compartilho vários conhecimentos, espero que aprenda algo novo :)
        </p>
      </div>
      <div className={styles.imgs}>
        <img
          className={styles.imgCirculo}
          src={Ciruclo}
          alt="Circulo Colorido"
        />
        <img
          className={styles.imgMinhaFoto}
          src="https://github.com/devMuller.png"
          alt="Minha foto"
        />
      </div>
    </section>
  );
};

export default Banner;
