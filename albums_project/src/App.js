import './App.css';
import { mockFetchHelper } from './mock_api';
import React, { useState } from "react";

function App() {
  const sendData = require("./albums.json");
  const [data, setData] = useState(null);
  mockFetchHelper(true, sendData).then(responseData => setData(responseData));

  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
