import PropTypes from "prop-types";

import Textarea from "../../atoms/Textarea";
import Card from "../../atoms/Card";
import SplitButton from "../../molecules/SplitButton";
import ButtonIcon from "../../molecules/ButtonIcon";

import "./Form.css";

const Form = ({
  value,
  onChange,
  onGrammar,
  onTranslate,
  onChangeLanguage,
}) => {
  return (
    <Card>
      <div className="form">
        <strong>Improvr</strong>
        <Textarea onChange={onChange}>{value}</Textarea>
        <div className="form-buttons">
          <ButtonIcon type="secondary" onClick={onGrammar} icon="grammar">
            Grammar
          </ButtonIcon>
          <SplitButton onClick={onTranslate} onChange={onChangeLanguage} />
        </div>
      </div>
    </Card>
  );
};

Form.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  onGrammar: PropTypes.func.isRequired,
  onTranslate: PropTypes.func.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
};

export default Form;
