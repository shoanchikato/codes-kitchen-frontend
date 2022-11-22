import Stove from "../components/Stove";
import { useStoveSwitch, useStoveTemp } from "../state/stove/api";

const StoveCtn = () => {
  const stoveSwitch = useStoveSwitch();
  const {isOn, temperature} = useStoveTemp();

  const buttonText = !isOn ? "On" : "Off";
  const isOnText = isOn ? "On" : "Off";

  const onClick = (e) => {
    stoveSwitch({ turnOn: !isOn });
  };

  return (
    <Stove
      onClick={onClick}
      buttonText={buttonText}
      isOnText={isOnText}
      temperature={temperature}
    />
  );
};

export default StoveCtn;
