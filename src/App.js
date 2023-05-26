// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Welcome to Shafin React App</h1>
//       <p>This is a simple React project.</p>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOutputClick = () => {
    setOutputValue(inputValue);
  };

  return (
    <div>
      <h1>Welcome to Shafin React App</h1>
      
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter some text"
      />

      <button onClick={handleOutputClick}>Submit</button>

      <p>Input: {inputValue}</p>
      <p>Output: {outputValue}</p>
    </div>
  );
}

export default App;
