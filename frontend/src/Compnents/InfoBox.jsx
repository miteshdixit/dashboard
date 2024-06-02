/* eslint-disable react/prop-types */


function AlertDetailsCard({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className="card mt-3" style={{ width: 'calc(40vw - 40px)', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h2 className="mb-3">Alert Details</h2>
      <div className="mb-2">
        <strong>Timestamp:</strong> {data?.timestamp}
      </div>
      <div className="mb-2">
        <strong>Source IP:</strong> {data?.src_ip}
      </div>
      <div className="mb-2">
        <strong>Destination IP:</strong> {data?.dest_ip}
      </div>
      <div className="mb-2">
        <strong>Signature:</strong> {data.alert?.signature}
      </div>
      <div className="mb-2">
        <strong>Category:</strong> {data.alert?.category}
      </div>
      <div className="mb-2">
        <strong>Severity:</strong> {data.alert?.severity}
      </div>
  
      <div className="mt-3">
        <button className="btn btn-primary me-2">Take Action</button>
        <button className="btn btn-secondary">Dismiss</button>
      </div>
    </div>
  );
}

export default AlertDetailsCard;
