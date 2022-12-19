export type TClassName = string | boolean | null | undefined;

export const classnames = (...names: TClassName[]) => {
  return names.filter((name) => !!name).join(" ");
};
