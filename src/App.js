import './App.css';
import useWindowDimensions from './hooks/useWindowDimensions';
import Wordle from "./Wordle"

function App() {
  const dimensions = useWindowDimensions()
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontFamily: "Quicksand"}}>
          PRO UNION WORD GAME
        </p>
        <Wordle dimensions={dimensions}/>
      </header>
    </div>
  );
}

export default App;
