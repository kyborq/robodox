import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

import styles from "./Root.module.css";

export const Root = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.Container}>
        <div className={styles.Content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
