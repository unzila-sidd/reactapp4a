// import logo from './logo.svg';
import './App.css';
import Parent from './Parent.js';
import counterContext from './CounterContext';

function App() {
  return (
    <counterContext.Provider value={20}>
    <div className="App">
      <Parent Name="Unzila"/>

    </div>
    </counterContext.Provider>
  );
}

export default App;
