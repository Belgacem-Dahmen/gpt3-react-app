import "./feature.css";
import PropTypes from "prop-types";

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};
Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};
export default Feature;
