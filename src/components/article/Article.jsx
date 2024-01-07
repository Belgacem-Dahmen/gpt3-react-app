import "./article.css";
import PropTypes from "react";
const Article = ({ imageUrl, date, title }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="blog-img" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read full article</p>
      </div>
    </div>
  );
};
Article.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};
export default Article;
