import { useState } from "react";

import CountComponent from "./CountComponent";

const ParentComponent = () => {
  const [showMyComponent, setShowMyComponent] = useState(true);

  const handleCountComponentUnmount = () => {
    setShowMyComponent(false);
  };

  return (
    <div>
      {showMyComponent && (
        <CountComponent onUnmount={handleCountComponentUnmount} />
      )}
    </div>
  );
};

export default ParentComponent;
