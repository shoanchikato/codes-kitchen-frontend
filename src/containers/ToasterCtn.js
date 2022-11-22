import Toaster from "../components/Toaster";
import { useToasterIsOn, useToasterSwitch } from "../state/toaster/api";

const ToasterCtn = () => {
  const toasterSwitch = useToasterSwitch();
  const { isOn } = useToasterIsOn();

  const buttonText = !isOn ? "Toast" : "Cancel";
  const isOnText = isOn ? "Toasting" : "Popped off the toast";

  const onClick = (e) => {
    toasterSwitch({ turnOn: !isOn });
  };

  return (
    <Toaster onClick={onClick} isOnText={isOnText} buttonText={buttonText} />
  );
};

export default ToasterCtn;
