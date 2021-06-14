import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="wave-container header-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="white"
            fill-opacity="1"
            d="M0,224L60,197.3C120,171,240,117,360,85.3C480,53,600,43,720,69.3C840,96,960,160,1080,154.7C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="container">
        <header className="App-header ">
          <div>
            <h1 className="text-left ">Dictionary</h1>
          </div>
        </header>
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
      <div className="wave-container bottow-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="252525"
            fill-opacity="1"
            d="M0,224L60,197.3C120,171,240,117,360,85.3C480,53,600,43,720,69.3C840,96,960,160,1080,154.7C1200,149,1320,75,1380,37.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default App;
