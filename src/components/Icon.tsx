import { icons, TIcon } from "../icons";

type Props = {
  name: TIcon;
};

export const Icon: React.FC<Props> = ({ name }) => {
  const IconAsset = icons[name];
  return <IconAsset />;
};
