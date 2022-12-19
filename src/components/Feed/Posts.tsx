import { TFeed } from "../../model/FeedModel";
import { Feed } from "./Feed";

import styles from "./Posts.module.css";

type Props = {
  columns?: number;
  data: TFeed;
};

export const Posts: React.FC<Props> = ({ columns, data }) => {
  return (
    <div className={styles.Posts}>
      <Feed feed={data} />
      {/* <Feed feed={secondPart} /> */}
      {/* <Feed feed={thirdPart} /> */}
    </div>
  );
};
