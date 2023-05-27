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
// import React, { useState } from 'react';

// function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [outputValue, setOutputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleOutputClick = () => {
//     setOutputValue(inputValue);
//   };

//   return (
//     <div>
//       <h1>Welcome to Shafin React App</h1>
      
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Enter some text"
//       />

//       <button onClick={handleOutputClick}>Submit</button>

//       <p>Input: {inputValue}</p>
//       <p>Output: {outputValue}</p>
//     </div>
//   );
// }

// export default App;
import { useState } from 'react';
function MyButton() {
  return (
    <button>This is Shafin's Button</button>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 190,
};




const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li key={product.id}>
    {product.id}
    {product.title}
    
    
  </li>
);






function MyButton2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}


function handleClick() {
  alert('You clicked me!');
  
}

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton />
      <MyButton />
      <ul>{listItems}</ul>
      <h1>{user.name}</h1>
      <button onClick={handleClick}>
          Click me
      </button>

      <button onClick={handleClick}>
        Clicked {count} times
      </button>
      <button onClick={handleClick}>
        Clicked {count} 2nd times
      </button>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
        

      />
      
    </div>
  );
  
}

export function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );
  }