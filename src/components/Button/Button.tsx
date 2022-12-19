import React from "react";
import { TIcon } from "../../icons";
import { Icon } from "../Icon";

import styles from "./Button.module.css";

type Props = {
  icon?: TIcon;
  label?: string;
  className?: string;
  background?: string;
  color?: string;
  selected?: boolean;
};

export const Button: React.FC<Props> = ({
  icon,
  label,
  className,
  background,
  color,
  selected,
}) => {
  return (
    <button
      className={`${styles.Button} ${className} ${selected && styles.Selected}`}
      style={{ backgroundColor: background }}
    >
      {!!icon && <Icon name={icon} fill={color} />}
      {!!label && (
        <span className={styles.Label} style={{ color }}>
          {label}
        </span>
      )}
    </button>
  );
};
