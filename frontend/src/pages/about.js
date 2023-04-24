//import logo from './logo.svg';
import logo from './North_Texas_Mean_Green_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          About Us
        </h1>
	  <p>
	    Created by: Pearson Davenport, Calvin James, Hang Tran, .... 
	  </p>
	  <p>
	    This project was created for our CSCE 4430: Programming Languages class project for the Spring 2023 semester
	  </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Homepage
        </a>
      </header>
    </div>
  );
}

export default App;


/*
Pearson Davenport
Calvin James
Hang Tran
*/