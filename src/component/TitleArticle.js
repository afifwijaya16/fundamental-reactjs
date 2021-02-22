import React from "react";

const TitleArticle = ({ text }) => {
  let variabelLain = "-";
  return (
    <h1>
      {text} {variabelLain}
    </h1>
  );
};

TitleArticle.defaultProps = {
  text: "no text",
};
export default TitleArticle;
