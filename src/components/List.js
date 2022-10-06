const List = ({ people }) => {
  return (
    <div>
      {people.map((p, index) => (
        <div key={index}>
          <span>{p.name}</span>
          <span>{p.email}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
