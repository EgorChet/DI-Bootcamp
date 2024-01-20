import { useState } from 'react';

function Events() {
  const [inputValue, setInputValue] = useState('');
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert("I was clicked");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(inputValue);
    }
  };

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <button onClick={clickMe}>Click Me</button>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        onKeyDown={handleKeyDown}
      />
      <button onClick={toggleButton}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default Events;
