import "./App.css";
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          
        </header>
        
        <main>
          <h1>React Dictionary</h1>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by <a className="link" href="https://github.com/sabrekatana/sabrekatana">Sabre Katana</a></small>
        </footer>
      </div>
    </div>
  );
}