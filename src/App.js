import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="friend" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by <span className="coder">Natalia de Mesquita orsi Vieira</span>, open-sourced
            on{" "}
            <a
              href="https://github.com/NataliaOrsi/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
