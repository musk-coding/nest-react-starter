import "./App.css";
import React, { useState, useEffect } from "react";
import config from "./config.json";
import axios from "axios";

function App() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(config.API_URL);
        setHello(response.data);
      } catch (e) {
        console.log(e.message);
      }
    }
    fetchData();
  }, []);

  return <div>{hello}</div>;
}

export default App;
