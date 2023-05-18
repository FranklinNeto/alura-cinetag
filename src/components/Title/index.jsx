import styles from "./Title.module.css";

function Title({ children }) {
  return <div className={styles.texto}>{children}</div>;
}

export default Title;
