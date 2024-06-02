/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Charts from "../Utils/Charts";
import Navbar from "../Compnents/Navbar"
// import InfoBox from "../Compnents/InfoBox";
import InfoBox from "../Compnents/InfoBox";
import Containers from "../Utils/Box1";
import AlertDetailsCard from "../Compnents/InfoBox";

function Dashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.toString());
      }
    };

    fetchData();
  }, []);
  
  return (
    <div>
         <Navbar />
         {/* <AlertDetailsCard data={data} /> */}
         <div className="mt-5">
      <Charts data={data}/>
         </div>
      
    </div>
  );
}

export default Dashboard;
