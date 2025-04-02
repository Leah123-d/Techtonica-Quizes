import React from "react";
import axios from "axios";
import "./styles.css";

export default function App() {
  const fetchCat = () => {
    const axiosConfig = {
      headers: {
        "x-api-key": process.env.CAT_API_KEY
      }
    };
    const request = axios.get(
      "https://api.thecatapi.com/v1/images/search",
      axiosConfig
    );
    request.then(response => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <h1 onClick={fetchCat}>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
