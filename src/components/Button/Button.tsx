import React from "react";
import { TIcon } from "../../icons";
import { classnames } from "../../utils/classnames";
import { Icon } from "../Icon";

import styles from "./Button.module.css";

type Props = {
  icon?: TIcon;
  label?: string;
  selected?: boolean;
  primary?: boolean;
};

export const Button: React.FC<Props> = ({ icon, label, selected, primary }) => {
  const primaryStyle = primary && !selected && styles.Primary;
  const selectedStyle = selected && !primary && styles.Selected;

  return (
    <button className={classnames(styles.Button, primaryStyle, selectedStyle)}>
      {!!icon && (
        <Icon
          name={icon}
          className={classnames(styles.Icon, primaryStyle, selectedStyle)}
        />
      )}
      {!!label && (
        <span className={classnames(styles.Label, primaryStyle, selectedStyle)}>
          {label}
        </span>
      )}
    </button>
  );
};
