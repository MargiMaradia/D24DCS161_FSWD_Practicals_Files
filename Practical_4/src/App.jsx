
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const incrementFive = () => setCount(count + 5);

  return (
    <div className="container">
      <div className="card">
        <h1 className="main-title">React Counter App</h1>

        <div className="counter-box">
          <h2 className="count">Count: {count}</h2>
          <div className="buttons">
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
          </div>
        </div>

        <h2 className="title">Welcome to CHARUSAT!!!</h2>

        <div className="form">
          <label>First Name:</label>
          <input
            type="text"
            placeholder='FirstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <label>Last Name:</label>
          <input
            type="text"
            placeholder='LastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="output">
          <p>First Name: <strong>{firstName}</strong></p>
          <p>Last Name: <strong>{lastName}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default App;
