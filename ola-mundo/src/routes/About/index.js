import styles from './About.module.css';

import PostModelo from 'components/PostModelo';
import fotoCapa from 'assets/imgs/sobre_mim_capa.png';

const About = () => {
  return (
    <PostModelo titulo="Sobre mim" fotoCapa={fotoCapa}>
      <h3 className={styles.subtitulo}>Olá, eu sou Rafael!</h3>
      <img
        src="https://github.com/devMuller.png"
        alt="Minha foto do Github"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? eu sou Estudante de programação e entusiasta em técnologia
      </p>

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        laudantium et distinctio est repellat, dicta nostrum nobis, dolore illo
        veniam accusamus optio voluptatem vitae voluptate natus autem
        voluptatibus quidem deleniti sunt dolor temporibus debitis! Repellat
        totam officiis quos. Perspiciatis enim, rem culpa est reiciendis hic
        eius ducimus sapiente corporis possimus?
      </p>

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse tempora
        aliquam sed fugiat itaque laudantium excepturi facilis, quam nostrum
        architecto officiis consequatur possimus aspernatur. Sapiente nemo enim
        tempora at porro ipsam, odit et! Dolor perferendis, dolore inventore
        sapiente saepe dignissimos, ullam optio non unde, debitis delectus
        tempora ratione enim a!
      </p>

      <p className={styles.paragrafo}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        quibusdam eveniet dolor. Animi, error optio quisquam tenetur neque quo
        voluptatum ex repellendus. Ipsum, laborum deserunt?
      </p>

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, delectus
        modi. Facere sunt minima praesentium totam alias aliquid similique sequi
        eveniet, animi quae sed iste officiis, eos distinctio. Nulla, minima?
      </p>

      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus
        veniam laudantium eaque, quia aut quis dolores tempore voluptatibus.
        Deleniti, assumenda! Consequuntur excepturi non quisquam maxime, ratione
        minus nam eveniet, dolores architecto nisi necessitatibus, inventore
        doloremque. Repellat fuga corporis amet?
      </p>
    </PostModelo>
  );
};

export default About;
