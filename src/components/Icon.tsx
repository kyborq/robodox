import { icons, TIcon } from "../icons";

type Props = {
  name: TIcon;
  fill?: string;
};

export const Icon: React.FC<Props> = ({ name, fill }) => {
  const IconAsset = icons[name];
  return <IconAsset fill={fill || "#000"} />;
};
