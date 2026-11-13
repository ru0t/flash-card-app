import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import FlashCard from "./components/FlashCard";

function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <ProgressBar index={index} />
      <FlashCard index={index} setIndex={setIndex} />
    </div>
  );
}

export default App;
