import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png";
import HeaderLink from "components/HeaderLink";

function Header() {
  return (
    <header className={styles.cabecalho}>
      <Link to="/">
        <img src={logo} alt="logo da cinetag" />
      </Link>
      <nav>
        <HeaderLink url="/">Home</HeaderLink>
        <HeaderLink url="/favorites">Favoritos</HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
