import React from "react";
import TitleArticle from "./component/TitleArticle";
import ContentArticle from "./component/ContentArticle";

const Article = ({ userLogin }) => {
  return (
    <div style={{ margin: "5px" }}>
      <TitleArticle text="Lorem ipsum dolor sit amet" />
      <ContentArticle dataLogin={userLogin}>
        <p>Halo world content article</p>
      </ContentArticle>
    </div>
  );
};

export default Article;
