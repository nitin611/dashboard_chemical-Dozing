import React from 'react';
import './Table.css';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Location</th>
          <th>Recommended Dozing</th>
          <th>Recommendation</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.location}</td>
            <td>{row.recommendedDozing}</td>
            <td>{row.recommendation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
