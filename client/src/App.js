import { Search } from './Components/Search';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header min-height-header flex flex-prop padding-left-header">
        Weatherly!
        </header>
        <main className="">
        <Search/>
        </main>
    </div>
  );
}

export default App;
