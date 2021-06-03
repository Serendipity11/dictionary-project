import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1 className="text-left">Dictionary</h1>
        <Dictionary defaultKeyword="world" />
        <footer className="text-center">
          <a
            href="https://github.com/Serendipity11/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open source code{" "}
          </a>{" "}
          by ToriS
        </footer>
      </div>
    </div>
  );
}

export default App;
