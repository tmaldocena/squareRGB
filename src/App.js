import logo from './logo.svg';
import './App.css';
import Square from './components/Square';

function App() {
  return (
    <div className="App">
      <h5>RGB Square</h5>
      <Square></Square>
      <h6>Hover to start randomizing colors</h6>
      <h6>Double Click to save the color</h6>
    </div>
  );
}

export default App;
