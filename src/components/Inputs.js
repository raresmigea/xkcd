const Inputs = ({ person, setPerson, callback }) => {
  const updateName = (e) => {
    setPerson((person) => ({ ...person, name: e.target.value }));
  };

  const updateEmail = (e) => {
    setPerson((person) => ({ ...person, email: e.target.value }));
  };

  console.log('person: ', person);
  return (
    <div>
      <label>name:</label>
      <input onChange={updateName}></input>
      <label>email:</label>
      <input onChange={updateEmail}></input>
      <button onClick={() => callback(person)}>add person</button>
    </div>
  );
};

export default Inputs;
