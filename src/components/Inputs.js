const Inputs = ({ person, setPerson, callback }) => {
  const updateName = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const updateEmail = (e) => {
    setPerson({ ...person, email: e.target.value });
  };

  return (
    <div>
      <label>name:</label>
      <input onClick={updateName}></input>
      <label>email:</label>
      <input onClick={updateEmail}></input>
      <button onClick={callback} />
    </div>
  );
};

export default Inputs;
