// import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js';
import counterContext from './CounterContext';
import { useState } from 'react';

function App() {
  // let [count, setCount] = useState(25);
  let countState = useState(1);
  return (
    <counterContext.Provider value={countState}>
    <div className="App">
      <Parent Name="Unzila"/>

    </div>
    </counterContext.Provider>
  );
}

export default App;
