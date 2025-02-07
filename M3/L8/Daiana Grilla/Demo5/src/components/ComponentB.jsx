const ComponentB = ({ counter, onIncrement }) => {
  return (
    <div>
      <p>Component B - Counter: {counter}</p>
      <button onClick={onIncrement}>Incrementar Counter B</button>
    </div>
  );
};

export default ComponentB;
