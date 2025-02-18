import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [iplData, setIplData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const sortedData = [...data].sort((a, b) => a.NRR - b.NRR);
        setIplData(sortedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch IPL data. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading IPL data...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="app-container">
      <div className="title-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqgj5aPBEZMrH0lWAzmjRtEJhzKHCiybxSg&s"
          alt="IPL Logo"
          className="ipl-logo"
        />
        <h1>IPL 2022 Points Table</h1>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {iplData.map((team) => (
              <tr key={team.No}>
                <td>{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.NRR.toFixed(3)}</td>
                <td>{team.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
