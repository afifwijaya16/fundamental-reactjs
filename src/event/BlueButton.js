import React from "react";

const BlueButton = ({ onCustomClick, caption }) => {
  return (
    <div>
      <button style={{ border: "2px solid blue" }} onClick={onCustomClick}>
        {caption}
      </button>
    </div>
  );
};

export default BlueButton;
