import MainSwitch from "../components/MainSwitch";
import {
  useMainSwitchIsOn,
  useMainSwitchSwitch,
} from "../state/mainSwitch/api";

const MainSwitchCtn = () => {
  const mainSwitchSwitch = useMainSwitchSwitch();
  const { isOn } = useMainSwitchIsOn();

  const buttonText = !isOn ? "On" : "Off";
  const isOnText = isOn ? "On" : "Off";

  const onClick = (e) => {
    mainSwitchSwitch({ turnOn: !isOn });
  };

  return (
    <MainSwitch onClick={onClick} buttonText={buttonText} isOnText={isOnText} />
  );
};

export default MainSwitchCtn;
