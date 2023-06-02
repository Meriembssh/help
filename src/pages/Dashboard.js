import React from 'react'
import AlertTable from '../components/AlertTable'
import '../styles/Dashboard.css'

function Dashboard() {
  const alerts = [
    // Example alerts data
    {
      timestamp: '2023-06-01 10:25:00',
      sourceIP: '192.168.0.100',
      sourcePort: '1234',
      destinationIP: '10.0.0.5',
      destinationPort: '80',
      protocol: 'TCP',
      alertType: 'Malware',
      severity: 'High',
      cve: 'NULL',
      description: 'Malware activity detected',
      actionTaken: 'Blocked connection',
      status: 'Under investigation',
    }, 
    {
      timestamp: '2023-06-01 10:25:00',
      sourceIP: '192.168.0.100',
      sourcePort: '1234',
      destinationIP: '10.0.0.5',
      destinationPort: '80',
      protocol: 'TCP',
      alertType: 'Malware',
      severity: 'High',
      cve: 'NULL',
      description: 'Malware activity detected',
      actionTaken: 'Blocked connection',
      status: 'Under investigation',
    }, 
    {
      timestamp: '2023-06-01 10:25:00',
      sourceIP: '192.168.0.100',
      sourcePort: '1234',
      destinationIP: '10.0.0.5',
      destinationPort: '80',
      protocol: 'TCP',
      alertType: 'Malware',
      severity: 'High',
      cve: 'NULL',
      description: 'Malware activity detected',
      actionTaken: 'Blocked connection',
      status: 'Under investigation',
    }, 
    {
      timestamp: '2023-06-01 10:25:00',
      sourceIP: '192.168.0.100',
      sourcePort: '1234',
      destinationIP: '10.0.0.5',
      destinationPort: '80',
      protocol: 'TCP',
      alertType: 'Malware',
      severity: 'High',
      cve: 'NULL',
      description: 'Malware activity detected',
      actionTaken: 'Blocked connection',
      status: 'Under investigation',
    }, 
    {
      timestamp: '2023-06-01 10:25:00',
      sourceIP: '192.168.0.100',
      sourcePort: '1234',
      destinationIP: '10.0.0.5',
      destinationPort: '80',
      protocol: 'TCP',
      alertType: 'Malware',
      severity: 'High',
      cve: 'NULL',
      description: 'Malware activity detected',
      actionTaken: 'Blocked connection',
      status: 'Under investigation',
    }, 
  ]
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">IPS/IDS Alerts</h1>
      <AlertTable alerts={alerts} />
    </div>
  )
}

export default Dashboard