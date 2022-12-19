import { Button } from "../components/Button/Button";
import { Card } from "../components/Card/Card";
import { Posts } from "../components/Feed/Posts";
import { TFeed } from "../model/FeedModel";

import styles from "./Feed.module.css";


export const Feed = () => {
  return (
    <div className={styles.Content}>
      <div className={styles.Sidebar}>
        <Button icon="compass" label="Главная" selected />
      </div>
      <Posts
        data={[
          {
            id: 1,
            title: "Привет, давай знакомится!",
            image:
              "https://sun9-60.userapi.com/impg/XUi-IL72hOg4RXKHs1r2UdEgs3u42n_GRgaKBg/HIIkSYLtO7s.jpg?size=454x266&quality=96&sign=e560a8ea139ae1c12495b8f348682f46&type=album",
          },
          {
            id: 2,
            title: "Идеи для публикации на сайте",
            image:
              "https://sun9-60.userapi.com/impg/XUi-IL72hOg4RXKHs1r2UdEgs3u42n_GRgaKBg/HIIkSYLtO7s.jpg?size=454x266&quality=96&sign=e560a8ea139ae1c12495b8f348682f46&type=album",
          },
        ]}
      />
    </div>
  );
};
