import logo from "../../assets/logo.svg";
import "./footer.css";
const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="gpt3__footer-button">
        <p> Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="" />
          <p>26 Rue boukhari 1006 Tunis, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Get In touch</h4>
          <p>26 Rue boukhari Tunis </p>
          <p>21344059</p>
          <p>belgacem.dahmen@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2024 GPT-3. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
