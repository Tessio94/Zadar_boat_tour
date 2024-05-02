import styles from "../styles/Button.module.css";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export function Button({ children, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`}>{children}</button>
  );
}

export default Button;
