import React from "react";
import humanize from "../../utils/humanize.js/humanize";
 
const Time = ({ children }) => {
  return (
    <>
      <time className="help-text" dateTime={children}>
        {humanize(children)}
      </time>
    </>
  );
};

export default Time;
