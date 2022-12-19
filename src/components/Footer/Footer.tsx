import { NavLink } from "react-router-dom";
import { Icon } from "../Icon";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Footer}>
        <div className={styles.FooterLinks}>
          <NavLink to="/agreement" className={styles.Link}>
            Пользовательское соглашение
          </NavLink>
          <NavLink to="/policy" className={styles.Link}>
            Политика конфиденциальности
          </NavLink>
        </div>

        <a href="https://github.com/kyborq/robodox">
          <Icon name="github" />
        </a>
      </div>
    </div>
  );
};
