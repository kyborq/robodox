import styles from "./Card.module.css";

type Props = {
  image: string;
  title: string;
  link?: string;
  horizontal?: boolean;
};

export const Card: React.FC<Props> = ({ image, title, link, horizontal }) => {
  return (
    <div className={`${styles.Card} ${horizontal && styles.Horizontal}`}>
      <img src={image} alt="" className={styles.Image} />
      <h3 className={styles.Title}>{title}</h3>
      {!!link && <a href={link} className={styles.Link} target="_blank"></a>}
    </div>
  );
};
