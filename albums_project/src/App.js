import './App.css';
import { mockFetchHelper } from './mock_api';
import React, { useState } from "react";

function App() {
  const sendData = require("./albums.json");
  const [data, setData] = useState(null);
  mockFetchHelper(true, sendData).then(responseData => setData(responseData));

  return (
    <div className="App">
      {data != null && <table id="albums-container">
        <tbody>
          <tr>
            <th>Band</th>
            <th>Album</th>
            <th>Genres</th>
            <th>Last Played</th>
            <th>Date Released</th>
          </tr>
          {data.albums.map(item => {
              return (
                <tr key="{item}">
                    <td>{ item.band_name }</td>
                    <td>{ item.album_title }</td>
                    <td>{ item.genres}</td>
                    <td>{ item.last_listened }</td>
                    <td>{ item.release_date }</td>
                </tr>
              )
            })}
        </tbody>
      </table>}
    </div>
  );
}

export default App;
