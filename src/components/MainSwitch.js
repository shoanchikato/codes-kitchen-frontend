const MainSwitch = ({ onClick, buttonText, isOnText }) => {
  return (
    <div className="cell">
      <h2>Main Switch</h2>
      <button onClick={onClick}>Turn {buttonText}</button>
      <p>Main Switch is {isOnText}</p>
      <p></p>
    </div>
  );
};

export default MainSwitch;
