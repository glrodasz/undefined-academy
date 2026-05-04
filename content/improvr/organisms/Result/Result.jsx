import PropTypes from "prop-types";

import "./Result.css";

import Card from "../../atoms/Card";
import Icon from "../../atoms/Icon";
import IconLabel from "../../molecules/IconLabel";
import ButtonIcon from "../../molecules/ButtonIcon";

const labelMap = {
  grammar: (lang) => `Corrected (${lang})`,
  translate: (lang) => `Translated (${lang})`,
};

const Result = ({ text, type, lang = "English", onClose, onCopy }) => {
  return (
    <Card>
      <div className="result">
        <p>{text}</p>
        <div className="result-buttons">
          <IconLabel icon={type}>{labelMap[type](lang)}</IconLabel>
          <ButtonIcon type="primary" icon="copy">
            Copy
          </ButtonIcon>
        </div>
        <div className="result-close">
          <Icon name="close" onClick={onClose} />
        </div>
      </div>
    </Card>
  );
};

Result.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["grammar", "translate"]).isRequired,
  lang: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default Result;
