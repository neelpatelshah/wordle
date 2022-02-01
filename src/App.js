import './App.css';
import { isMobile } from "react-device-detect"
import Wordle from "./Wordle"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{fontFamily: "Quicksand"}}>
          PRO UNION WORD GAME {`${isMobile ? "pee" : ""}`}
        </p>
        <Wordle />
      </header>
    </div>
  );
}

export default App;
