import "./App.css";
import MainSwitchCtn from "./containers/MainSwitchCtn";
import ToasterCtn from "./containers/ToasterCtn";
import StoveCtn from "./containers/StoveCtn";

function App() {

  return (
    <div>
      <div className="main-container">
        <div>
          <h1>Code's Kitchen</h1>
        </div>
      </div>
      <div className="main-container">
        <div className="container">
          <MainSwitchCtn />
          <ToasterCtn />
          <StoveCtn />
        </div>
      </div>
    </div>
  );
}

export default App;
