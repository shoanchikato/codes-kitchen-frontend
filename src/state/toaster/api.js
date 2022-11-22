import { useState, useEffect } from "react";
import { endpoint } from "../shared";

export const useToasterIsOn = () => {
  const [response, setResponse] = useState([false, 0]);

  useEffect(() => {
    const webSocket = new WebSocket(`ws://${endpoint}/toaster/is-on`);

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

export const useToasterSwitch = () => {
  const [response, setResponse] = useState(null);

  return (data) => {
    fetch(`http://${endpoint}/toaster/switch`, {
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
