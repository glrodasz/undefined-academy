import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../../atoms/Button";
import "./DropdownButton.css";

const Icon = ({ className }) => <span className={className}>🔽</span>;

const DropdownButton = ({ onClick }) => {
  const [lang, setLang] = useState("english");
  const [letter, ...word] = lang;

  return (
    <div className="dropdown-button-container">
      <Button className="dropdown-button" type="primary" onClick={onClick}>
        Translate to ({letter.toUpperCase()}
        {word})
      </Button>
      <select
        id="lang"
        className="dropdown-button-select"
        onChange={(event) => setLang(event.currentTarget.value)}
      >
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
        <option value="swedish">Swedish</option>
      </select>
      <Icon className="dropdown-button-arrow" />
    </div>
  );
};

DropdownButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DropdownButton;
