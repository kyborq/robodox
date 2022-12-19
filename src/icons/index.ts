import logo from "./logo.svg";
import home from "./home.svg";
import add from "./add.svg";
import user from "./user.svg";
import search from "./search.svg";
import compass from "./compass.svg";
import bookmark from "./bookmark.svg";

export const icons = {
  logo,
  home,
  add,
  user,
  search,
  compass,
  bookmark,
};

export type TIcon = keyof typeof icons;
