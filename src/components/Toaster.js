const Toaster = ({ onClick, buttonText, isOnText }) => {
  return (
    <div className="cell">
      <h2>Toaster</h2>
      <button onClick={onClick}>{buttonText}</button>
      <p>{isOnText}</p>
      <p></p>
    </div>
  );
};

export default Toaster;
