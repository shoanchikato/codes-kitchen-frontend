import { useState, useEffect } from "react";
import { endpoint } from "../shared";

export const useMainSwitchIsOn = () => {
  const [response, setResponse] = useState({isOn: false});

  useEffect(() => {
    const webSocket = new WebSocket(`ws://${endpoint}/main-switch/is-on`);

    webSocket.onopen = (event) => {
      webSocket.send("hello");
    }
    webSocket.onmessage = (event) => {
      const {isOn} = JSON.parse(event.data);
      setResponse({isOn});
    }
  }, []);

  return response;
};

export const useMainSwitchSwitch = () => {
  const [response, setResponse] = useState(null);

  return (data) => {
    fetch(`http://${endpoint}/main-switch/switch`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((data) => data.json())
      .then((json) => setResponse(json));

    return response;
  };
};
