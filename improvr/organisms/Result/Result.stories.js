import Result from "./Result";

export default {
  component: Result,
  tags: ["autodocs"],
};

export const Grammar = {
  args: {
    type: "grammar",
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
};

export const Translated = {
  args: {
    type: "translate",
    text: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
};
