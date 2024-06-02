/* eslint-disable react/prop-types */
import { ResponsiveContainer, LineChart, Line, Tooltip, Legend } from 'recharts';
import XAxis2 from './XAxis2';
import YAxis2 from './YAxis2';

function TrendsChart({ data }) {
  // Ensure data is an array of objects
  if (!Array.isArray(data) || data.length === 0) {
    console.error('Invalid data format: Expected an array with data objects.');
    return null;
  }

  return (
    <div className="card mt-3 border border-primary rounded " style={{ width: 'calc(40vw - 40px)', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis2 dataKey="timestamp" interval={'preserveStartEnd'} label={{ value: 'Timestamp', position: 'insideBottomRight', offset: 0 }} />
            <YAxis2 dataKey="alert.signature_id" label={{ value: 'Signature ID', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            
            {/* Render multiple lines based on your data */}
            <Line 
              type="monotone" 
              dataKey="alert.rev" 
              name="Revision" 
              stroke="#8884d8" 
              activeDot={{ r: 8 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrendsChart;
