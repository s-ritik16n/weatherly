import { Search } from './Components/Search';
import "./App.css";
import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa';
import { RiSunLine } from "react-icons/ri";

function App() {
  return (
    <div className="App">
      <header className="App-header min-height-header flex flex-prop padding-left-header">
        <div>Weatherly<RiSunLine style={{fontSize: "3vh", paddingLeft: "8px"}}/></div>
        </header>
        <main className="padding-top">
        <Search/>
        </main>
        <footer className="App-header footer flex-row">
          <a target="_blank" href="https://www.linkedin.com/in/s-ritik16n" className="link-fonts"><FaLinkedin/></a>
          <a target="_blank" href="https://stackoverflow.com/users/4466240/ritik-saxena?tab=profile" className="link-fonts"><FaStackOverflow/></a>
          <a target="_blank" href="https://github.com/s-ritik16n/" className="link-fonts"><FaGithub/></a>
        </footer>
    </div>
  );
}

export default App;
