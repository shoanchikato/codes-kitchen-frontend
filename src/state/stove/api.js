import { useState, useEffect } from "react";
import { endpoint } from "../shared";

export const useStoveTemp = () => {
  const [response, setResponse] = useState({ isOn: false, temperature: 0 });

  useEffect(() => {
    const webSocket = new WebSocket(`ws://${endpoint}/stove/temp`);

    webSocket.onopen = (event) => {
      webSocket.send("hello");
    };
    webSocket.onmessage = (event) => {
      const { isOn, temperature } = JSON.parse(event.data);
      setResponse({ isOn, temperature });
    };
  }, []);

  return response;
};

export const useStoveSwitch = () => {
  const [response, setResponse] = useState(null);

  return (data) => {
    fetch(`http://${endpoint}/stove/switch`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((json) => setResponse(json));

    return response;
  };
};
