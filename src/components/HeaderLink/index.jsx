import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function HeaderLink({ children, url }) {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  );
}

export default HeaderLink;
