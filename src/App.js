import './App.css';
import React from 'react';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <NavBar />
        </header>
      </React.Fragment>
    </div>
  );
}

export default App;
