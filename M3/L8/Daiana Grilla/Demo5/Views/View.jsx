import User from "../src/components/User";

const View = () => {
  const handleUserButtonClick = (info) => {
    console.log(info);
  };

  return (
    <div>
      <User handleUserButtonClick={handleUserButtonClick} />
    </div>
  );
};

export default View;
