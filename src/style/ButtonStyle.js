import React from "react";
import style from "./Button.module.scss";
const ButtonStyle = (props) => {
  return (
    <div>
      <button className={style.default}>{props.children}</button>
    </div>
  );
};

export default ButtonStyle;
