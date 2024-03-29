import { Feature } from "../../components";
import "./whatGPT3.css";
const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 gradient__bg section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-features">
        <Feature
          title="What is GPT 3 ?"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio a officia at perferendis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio a officia at perferendis!Expedita, ad!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio a officia at perferendis! Expedita, ad!"
        />
        <Feature
          title="Knowledge base"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio a officia at perferendis! Expedita, ad!"
        />
        <Feature
          title="Education"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio a officia at perferendis! Expedita, ad!"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
