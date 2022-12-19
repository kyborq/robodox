import { Button } from "../Button/Button";
import { Icon } from "../Icon";
import { NavButton } from "../Navigation/NavButton";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Container}>
      <div className={styles.Header}>
        <div className={styles.Logo}>
          <Icon name="logo" />
          <span className={styles.Name}>ROBODOX</span>
        </div>

        <nav className={styles.Navigation}>
          <NavButton link="/" icon="compass" />
          <NavButton link="/events" icon="calendar" />
          <NavButton link="/notifications" icon="notification" />
          <NavButton link="/user" icon="user" />
        </nav>
      </div>
    </header>
  );
};
