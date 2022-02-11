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
          <tr key="header">
            <th>Band</th>
            <th>Album</th>
            <th>Genres</th>
            <th>Last Played</th>
            <th>Date Released</th>
          </tr>
          {data.albums.sort((a, b) => a.last_listened < b.last_listened ? 1 : -1).map(item => {
            let date = new Date(item.last_listened).toISOString();
            console.log(date);
            let ampm = ' pm';
            let hours = parseInt(date.slice(11, 13));
            if (hours > 12) {
              hours -= 12;
            } else if (hours == 0) {
              hours = 12;
              ampm = " am";
            }
            date = date.slice(5, 7) + "/" + date.slice(8, 10) + "/" + date.slice(0, 4) + ' ' + hours + date.slice(13, 16) + ampm;
            
            let release = item.release_date;
            if (release)
              release = release.slice(5) + "/" + release.slice(0, 4);

            return (
              <tr key={item.album_title}>
                  <td>{ item.band_name === null ? '--' : item.band_name }</td>
                  <td>{ item.album_title === null ? '--' : item.album_title }</td>
                  <td>{ item.genres === null ? '--' : item.genres.map ((genre, i) => [
                      i > 0 && ", ",
                      genre
                  ])}</td>
                  <td>{ item.last_listened === null ? '--' : date }</td>
                  <td>{ item.release_date === null ? '--' : release }</td>
              </tr>
            )
          })}
        </tbody>
      </table>}
    </div>
  );
}

export default App;
