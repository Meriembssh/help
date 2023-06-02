import React from 'react';
import '../styles/AlertTable.css'; // Import CSS file for styling

const AlertTable = ({ alerts }) => {
  return (
    <table className="alert-table">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Source IP/Port</th>
          <th>Destination IP/Port</th>
          <th>Protocol</th>
          <th>Alert Type/ID</th>
          <th>Severity Level</th>
          <th>CVE</th>
          <th>Description</th>
          <th>Action Taken</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map((alert, index) => (
          <tr key={index}>
            <td>{alert.timestamp}</td>
            <td>{alert.sourceIP}/{alert.sourcePort}</td>
            <td>{alert.destinationIP}/{alert.destinationPort}</td>
            <td>{alert.protocol}</td>
            <td>{alert.alertType}</td>
            <td>{alert.severity}</td>
            <td>{alert.cve}</td> 
            <td>{alert.description}</td>
            <td>{alert.actionTaken}</td>
            <td>{alert.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AlertTable;