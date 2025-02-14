const ComponentA = ({ counter, onIncrement }) => {
  return (
    <div>
      <p>Component A - Counter: {counter}</p>
      <button onClick={onIncrement}>Incrementar Counter A</button>
    </div>
  );
};

export default ComponentA;
