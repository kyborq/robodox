import { Button } from "../components/Button/Button";

import styles from "./User.module.css";

export const User = () => {
  return (
    <div className={styles.Content}>
      <div className={styles.Form}>
        <h2 style={{ margin: 0, marginBottom: 16 }}>Войдите в аккаунт</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "100%",
          }}
        >
          <input type="text" className={styles.Input} />
          <input type="text" className={styles.Input} />
          <input type="text" className={styles.Input} />
        </div>

        <Button icon="key" label="Войти" primary />
        <div style={{ height: 8 }}></div>
        <Button icon="userAdd" label="Зарегистрироваться" selected />
        <div style={{ height: 8 }}></div>
        <Button icon="refresh" label="Восстановить" />
      </div>
    </div>
  );
};
