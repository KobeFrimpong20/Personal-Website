//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Site">
      <header className="Site-header">
        <div className="Names">
          <h2 id="Title-name">Kobe S. Frimpong</h2>
          <h3 id="Nickname">Professional Doer</h3>
        </div>
        <nav className="navBar">
          <ul className="navBar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Upcoming</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Exploration</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
