import { icons, TIcon } from "../icons";

type Props = {
  name: TIcon;
  fill?: string;
  className?: string;
};

export const Icon: React.FC<Props> = ({ name, fill, className }) => {
  const IconAsset = icons[name];
  return <IconAsset fill={fill || "#000"} className={className} />;
};
