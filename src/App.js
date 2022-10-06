import React from 'react';
import './App.css';
import Inputs from './components/Inputs';
import List from './components/List';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState({ name: '', email: '' });
  const [people, setPeople] = useState([]);

  const callback = (e) => {
    console.log('e:: ', e);
    setPeople((people) => [...people, person]);
  };

  console.log('people: ', people);
  return (
    <div>
      <Inputs callback={callback} person={person} setPerson={setPerson} />
      <List />
    </div>
  );
}

export default App;
