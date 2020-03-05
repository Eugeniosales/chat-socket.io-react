import React from 'react';
import './App.css';
import Navegation from './components/Navegation';
import Routes from './routes';

function App() {
  return (
    <div className="App">
        <Navegation title="Onboard Atendimento" />
      <div className="container">
          <Routes />
      </div>
    </div>
  );
}

export default App;