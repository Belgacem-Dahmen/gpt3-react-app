import "./blog.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are bloging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container-left">
          <Article
            imageUrl={blog01}
            date="01/06/2024"
            title="GPT3 and Open Ai is the Future. Let us explore how it is?"
          />
        </div>
        <div className="gpt3__blog-container-right">
          <Article
            imageUrl={blog02}
            date="01/06/2024"
            title="GPT3 and Open Ai is the Future. Let us explore how it is?"
          />
          <Article
            imageUrl={blog03}
            date="01/06/2024"
            title="GPT3 and Open Ai is the Future. Let us explore how it is?"
          />
          <Article
            imageUrl={blog04}
            date="01/06/2024"
            title="GPT3 and Open Ai is the Future. Let us explore how it is?"
          />
          <Article
            imageUrl={blog05}
            date="01/06/2024"
            title="GPT3 and Open Ai is the Future. Let us explore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
