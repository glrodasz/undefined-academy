import Paragraph from "../Paragraph";
import humanize from "../../utils/humanize";

const Time = ({ children }) => {
  return (
    <Paragraph isHelpText size="xs" as="span">
      <time dateTime={children}>{humanize(children)}</time>
    </Paragraph>
  );
};

export default Time;
