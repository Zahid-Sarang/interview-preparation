import React from 'react';

import './App.css';
import Button from './components/Button';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Button onClick={() => alert("Okay")} text="Clicked Me"/>
      <Button text="Clicked Me  Again"/>
      <Form />
    </div>
  );
}

export default App;
