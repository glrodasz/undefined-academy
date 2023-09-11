import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";

import "./SplitButton.css";

const SplitButton = ({ onClick, onChange }) => {
  const [lang, setLang] = useState("english");
  const [letter, ...word] = lang;

  return (
    <div className="split-button-container">
      <Button className="split-button" type="primary" onClick={onClick}>
        Translate to ({letter.toUpperCase()}
        {word})
      </Button>
      <select
        id="lang"
        className="split-button-select"
        onChange={(event) => {
          const { value } = event.currentTarget;
          setLang(value);
          onChange(value);
        }}
      >
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
        <option value="swedish">Swedish</option>
      </select>
      <Icon className="split-button-arrow" name="arrowDown" />
    </div>
  );
};

SplitButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SplitButton;
