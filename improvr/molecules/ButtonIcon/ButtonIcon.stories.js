import ButtonIcon from "./ButtonIcon";

export default {
  component: ButtonIcon,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    type: "primary",
    children: "Grammar",
    icon: "grammar",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    children: "Copy",
    icon: "copy",
  },
};
