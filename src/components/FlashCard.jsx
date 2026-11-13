import { useState } from "react";
import { quiz } from "../data";

function FlashCard({ index, setIndex }) {
  const [toggle, setToggle] = useState(false);

  const data = toggle ? quiz[index].answer : quiz[index].question;

  function handleToggle() {
    setToggle(!toggle);
  }

  function handleNextClick() {
    setIndex((prevIndex) => (prevIndex < quiz.length - 1 ? prevIndex + 1 : 0));
    setToggle(false);
  }

  function handlePrevClick() {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
    setToggle(false);
  }

  return (
    <div className="app">
      <div className="quiz-section">{data}</div>
      <div className="control-section">
        <div className="previous">
          <button onClick={handlePrevClick}>
            &larr; <span>Previous</span>
          </button>
        </div>
        <button onClick={handleToggle}>
          {toggle ? "Hide" : "Show"} Answer
        </button>
        <div className="next">
          <button onClick={handleNextClick}>
            &rarr; <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
