import possiblityImage from "../../assets/possibility.png";
import "./possibility.css";
const Possibility = () => {
  return (
    <div id="possibility" className="gpt3__possibility section__padding">
      <div className="gpt3__possibility-image">
        <img src={possiblityImage} alt="possiblity-Image" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ab
          illum molestiae ex veritatis, ratione eaque dolor nulla et doloremque
          iure repellendus architecto sed modi, alias odit explicabo quasi
          inventore.
        </p>

        <h4>Request Early acces to get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
