import './App.css';
import useWindowDimensions from './hooks/useWindowDimensions';
import Wordle from "./Wordle"

function App() {
  const dimensions = useWindowDimensions()
  return (
    <div style={style}>
      <p style={{fontSize: 30}}>
        PRO UNION WORD GAME
      </p>
      <Wordle dimensions={dimensions}/>
    </div>
  );
}

const style = {
  textAlign: "center",
  backgroundColor: "#242c2a",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: 10,
  color: "white",
  fontFamily: "Quicksand"
}

export default App;
