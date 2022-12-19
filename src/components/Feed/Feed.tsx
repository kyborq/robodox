import { TFeed } from "../../model/FeedModel";
import { Card } from "../Card/Card";

import styles from "./Feed.module.css";

type Props = {
  feed: TFeed;
};

export const Feed: React.FC<Props> = ({ feed }) => {
  const feedList = feed.map((post, index) => {
    return (
      <Card key={index} image={post.image} title={post.title} horizontal />
    );
  });

  return <div className={styles.Feed}>{feedList}</div>;
};
