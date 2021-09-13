import './App.css';
import React from 'react'
import Formulario from './components/form';
import { Container } from 'reactstrap';

function App() {
  return (    
    <div>
      <Container className="mt-4">
      <Formulario />
      </Container>
    </div>
  );
}

export default App;
