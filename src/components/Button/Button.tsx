import React from "react";
import { TIcon } from "../../icons";
import { Icon } from "../Icon";

import styles from "./Button.module.css";

type Props = {
  icon?: TIcon;
  label?: string;
  className?: string;
};

export const Button: React.FC<Props> = ({ icon, label, className }) => {
  return (
    <button className={`${styles.Button} ${className}`}>
      {!!icon && <Icon name={icon} />}
    </button>
  );
};
