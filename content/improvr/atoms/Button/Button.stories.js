import Button from "./Button";

export default {
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Esto es un botón",
  },
};

export const Default = {
  args: {},
};

export const Primary = {
  args: {
    type: "primary",
  },
};

export const Secondary = {
  args: {
    type: "secondary",
  },
};
