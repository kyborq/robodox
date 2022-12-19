import { TIcon } from "../../icons";
import { Icon } from "../Icon";

import styles from "./IconButton.module.css";

type Props = {
  icon: TIcon;
};

export const IconButton: React.FC<Props> = ({ icon }) => {
  return (
    <button className={styles.IconButton}>
      <Icon name={icon} />
    </button>
  );
};
