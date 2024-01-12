import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";


import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <ul className="{styles.social_list">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p>Nosso Rodape</p>
    </footer>
  );
}

export default Footer;
