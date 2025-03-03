import React, { useState } from 'react';
import './App.css';
function App() {
  const [value, setValue] = useState('');

  return (
    <div className="main">
      <h1>Calculator</h1>
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        readOnly 
      />
      <div className="buttons">
        <button onClick={() => setValue(value + '7')}>7</button>
        <button onClick={() => setValue(value + '8')}>8</button>
        <button onClick={() => setValue(value + '9')}>9</button>
        <button onClick={() => setValue(value + '+')}>+</button>
        <button onClick={() => setValue(value + '4')}>4</button>
        <button onClick={() => setValue(value + '5')}>5</button>
        <button onClick={() => setValue(value + '6')}>6</button>
        <button onClick={() => setValue(value + '-')}>-</button>
        <button onClick={() => setValue(value + '1')}>1</button>
        <button onClick={() => setValue(value + '2')}>2</button>
        <button onClick={() => setValue(value + '3')}>3</button>
        <button onClick={() => setValue(value + '*')}>*</button>
        <button onClick={() => setValue(value + '0')}>0</button>
        <button onClick={() => setValue(value + '.')}>.</button>
        <button onClick={() => {
          try {
            setValue(eval(value.replace(/^0+/, '')).toString());
          } catch (e) {
            setValue('Error');
          }
        }}>=</button>
        <button onClick={() => setValue(value + '/')}>/</button>
        <button onClick={() => setValue('')}>C</button>
      </div>
    </div>
  );
}

export default App;
