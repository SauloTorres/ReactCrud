import './App.css';
import React from 'react'
import { HashRouter} from 'react-router-dom'
import Routes from './Routes'


function App() {
  return (
    <HashRouter>  
    <div>
      <Routes />
    </div>
    </HashRouter>  
  );
}

export default App;
