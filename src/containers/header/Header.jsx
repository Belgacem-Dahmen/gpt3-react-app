import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Lets build something amazing with GPT-3 Open AI
        </h1>
        <p>
          yet bed any for travelling assitance indulgence unpleasing. Not
          thoughts all exercice blessing. Indulgence way everything joy
          alteration boisterous the attatchement. Party we yearsto order allow
          asked of.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="your email adresse" />
          <button> Get started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />

          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="" />
      </div>
    </div>
  );
};

export default Header;
