import './App.css';
import useWindowDimensions from './hooks/useWindowDimensions';
import Wordle from "./Wordle"

function App() {
  const { height, width} = useWindowDimensions()

  return (
    <div className="App" style={{width: width, height: height}}>
      <header className="App-header">
        <p style={{fontFamily: "Quicksand"}}>
          PRO UNION WORD GAME
        </p>
        <Wordle />
      </header>
    </div>
  );
}

export default App;
