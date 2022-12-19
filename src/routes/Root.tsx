import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

import styles from "./Root.module.css";

export const Root = () => {
  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.Container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
