import React from "react";
import { NavLink } from "react-router-dom";
import { TIcon } from "../../icons";
import { Icon } from "../Icon";

import styles from "./NavButton.module.css";

type Props = {
  link: string;
  icon: TIcon;
};

export const NavButton: React.FC<Props> = ({ link, icon }) => {
  const activeStyle = `${styles.Active} ${styles.Link}`;

  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? activeStyle : styles.Link)}
    >
      <Icon name={icon} />
    </NavLink>
  );
};
