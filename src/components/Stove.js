const Stove = ({ onClick, buttonText, isOnText, temperature }) => {
  return (
    <div className="cell">
      <h2>Stove</h2>
      <button onClick={onClick}>Turn {buttonText}</button>
      <p>Stove is {isOnText}</p>
      <p>Temperature: {temperature} degrees</p>
    </div>
  );
};

export default Stove;
