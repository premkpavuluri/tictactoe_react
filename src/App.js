import './App.css';
import TicTacToe from "./components/TicTacToe";

function App() {
  return (<TicTacToe players={[{name: 'Prem', symbol: 'X'}, {name: 'Bobby', symbol: 'O'}]}/>);
}

export default App;
