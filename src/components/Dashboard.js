import React from 'react';
import './Dashboard.css';

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <div className="header">
        <div className="row">
          <div className="field">
            <label>Model Run Frequency:</label>
            <input type="text" value="1" readOnly /> Mins
          </div>
          <div className="field">
            <label>Model Cooling Time:</label>
            <input type="text" value="1" readOnly /> Mins
          </div>
        </div>


        

        <div className="row">
          <div className="field">
            <label>TransactionID:</label>
            <input type="text" value={data.transactionId} readOnly />
          </div>
          </div>
          

          <div className="row">
          <div className="field">
            <label>DC2 TPH:</label>
            <input type="text" value={`${data.dc2Tph} `} readOnly />Tons/Hr
          </div>
          <div className="field">
            <label>VS1 Current:</label>
            <input type="text" value={`${data.vs1Current} `} readOnly />AMP
          </div>
          <div className="field">
            <label>FFS Current:</label>
            <input type="text" value={`${data.ffsCurrent} `} readOnly />AMP
          </div>
        </div>
        

        <div className="row">
          <div className="field">
            <label>DC3 bin Level:</label>
            <input type="text" value={`${data.dc3BinLevel} `} readOnly />%
          </div>
          <div className="field">
            <label>VS2 Current:</label>
            <input type="text" value={`${data.vs2Current} `} readOnly />AMP
          </div>
          <div className="field">
            <label>VS3 Current:</label>
            <input type="text" value={`${data.vs3Current} `} readOnly />AMP
          </div>
        </div>
      </div>

      <div className="recommendation">
        <div className="field">
          <label>Recommendation Date:</label>
          <input type="text" value="Add your recommendation date here" readOnly />
        </div>
        <div className="field">
          <label>Transaction ID:</label>
          <input type="text" value="Add your transaction ID here" readOnly />
        </div>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Location</th>
              <th>Recommended Dozing</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {data.tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.location}</td>
                <td>{row.recommendedDozing}</td>
                <td>{row.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="actions">
        <button>Confirm</button>
        <button>Acknowledge</button>
      </div>
    </div>
  );
};

export default Dashboard;
