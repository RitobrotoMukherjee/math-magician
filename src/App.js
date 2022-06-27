import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to
          {' '}
          <code>Math Magician</code>
          {' '}
          Web App
        </p>
      </header>
    </div>
  );
}

export default App;
