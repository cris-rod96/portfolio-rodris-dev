import { IconType } from "react-icons";

export const Title = ({
  IconTitle,
  text,
}: {
  IconTitle: IconType;
  text: string;
}) => {
  return (
    <h2 className="flex items-center gap-3 text-4xl  text-primary mb-10">
      <IconTitle />
      <span>{text}</span>
    </h2>
  );
};
