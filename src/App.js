import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Hi!!!</h1>
        <h2>Welcome to Relevantz!!!</h2>
      </header>

      {/* <label for ="uname" role = "label"><b>Username</b></label>
      <input type = "text" role = "username" name = "uname" required />
      <br />
      <label for ="psw" role = "pwdlabel"><b>Password</b></label>
      <input type = "password" placeholder = "Enter Password" role = "pwdtext" name = "psw" required />
      <br />
      <button type = "submit" data-testid = "login-submit">Login</button>
      <label>
        <input type = "checkbox" data-testid = "checkbox" checked = "checked" name = "remember" />
      </label> */}
    </div>
  );
}

export default App;
