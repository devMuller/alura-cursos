import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="socials">
        <ul>
          <li>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgs/fb.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgs/tw.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imgs/ig.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src="/imgs/logo.png" alt="Logo Organo" />
      </div>
      <div className="credits">
        <p>Desenvolvido por Rafael Muller</p>
      </div>
    </footer>
  );
};

export default Footer;
