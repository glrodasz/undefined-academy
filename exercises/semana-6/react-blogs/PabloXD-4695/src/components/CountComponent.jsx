/* eslint-disable react/prop-types */

// React Hooks Practice
// Transformar la siguiente funcionalidad de componente de clases a funciones y Hooks:
// Link: https://bit.ly/react-lifecycle-hooks

import { useState, useEffect } from "react";

const log = (key) => console.log(`${key} ${new Date().getTime()}`);

const CountComponent = ({ onUnmount }) => {
  const [count, setCount] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 65) {
          clearInterval(intervalId);
          onUnmount();
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
      log("will unmount");
    };
  }, [onUnmount]);

  useEffect(() => {
    log("did mount");
  }, []);

  log("render");
  return <h1>{count}</h1>;
};

export default CountComponent;
