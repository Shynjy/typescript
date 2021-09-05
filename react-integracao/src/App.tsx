import React from 'react';
import './App.css';

import Contador from './componentes/Contador';

function App() {
  return (
    <div className="App">
      <Contador valorIncial={500} />
      <Contador />
    </div>
  );
}

export default App;
