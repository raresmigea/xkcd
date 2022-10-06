import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import List from './components/List';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState({ name: '', email: '' });
  const [people, setPeople] = useState([]);

  const callback = (e) => {
    setPeople((people) => [...people, person]);
  };

  return (
    <div>
      <Inputs callback={callback} person={person} setPerson={setPerson} />
      <List people={people} />
    </div>
  );
}

export default App;
