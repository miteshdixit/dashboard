/* eslint-disable react/prop-types */

import { ResponsiveContainer, BarChart, Bar,CartesianGrid, Tooltip } from 'recharts';
import XAxis2 from './XAxis2';
import YAxis2 from './YAxis2';

function PortChart({ data }) {
 
  const portCounts = {};
  data.forEach(alert => {
    const port = alert.dest_port || alert.src_port;
    if (port) {
      if (!portCounts[port]) {
        portCounts[port] = 0;
      }
      portCounts[port]++;
    }
  });

  
  const chartData = Object.keys(portCounts).map(port => ({
    port: port,
    count: portCounts[port]
  }));

  return (
    <div className="card mt-3 border border-primary rounded" style={{ width: 'calc(40vw - 40px)', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h2 className="mb-3">Port Alert Counts</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis2 dataKey="port" />
            <YAxis2 />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PortChart;
