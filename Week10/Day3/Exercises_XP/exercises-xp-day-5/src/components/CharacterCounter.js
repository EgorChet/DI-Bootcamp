import { useRef, useState } from "react";
import "./CharacterCounter.css";
function CharacterCounter() {
  const inputRef = useRef(null);
  const [charCount, setCharCount] = useState(0); // Initialize state

  const handleInputChange = () => {
    const textLength = inputRef.current.value.length;
    setCharCount(textLength); // Update character count
  };

  return (
    <div className="character-counter">
      <h1>Character Counter</h1>
      <textarea
        ref={inputRef}
        onChange={handleInputChange}
        placeholder='Type something...'
        
      ></textarea>
      <p>Character Count: {charCount}</p> {/* Display character count */}
    </div>
  );
}

export default CharacterCounter;
