import './App.css';
import React from 'react'
import Formulario from './components/form';
import List from './components/list';
import { Button, Form, FormGroup, Label, Input, Table, Container } from 'reactstrap';

function App() {
  return (    
    <div>
      <Container className="mt-4">
      <Formulario />
      <List />
      </Container>
    </div>
  );
}

export default App;
