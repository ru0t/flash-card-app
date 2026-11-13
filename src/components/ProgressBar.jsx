import { quiz } from "../data";

function ProgressBar({ index }) {
  const questionLength = quiz.length;
  const progress = ((index + 1) / questionLength) * 100;
  return (
    <div className="progress-container">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      <p>
        {index + 1} of {questionLength}
      </p>
    </div>
  );
}

export default ProgressBar;
