import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/data')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Error fetching the JSON:', error));
  }, []);

  return (
    <div className="App">
      {data ? (
        <Dashboard data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
