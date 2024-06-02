/* eslint-disable react/prop-types */


import TrendsChart from '../Compnents/TrendsChart'
import SeverityChart from '../Compnents/ServerityChart'
import Protocol from '../Compnents/Protocol'

function Charts({data}) {
  return (
    <div>

<div className="container text-center ">

  <div className="row">
        <div className="col mt-4">
        <TrendsChart data={data} />
        </div>
        <div className="col mt-4">
    <Protocol data={data}/>
    </div>
  </div>
  <div className="col mt-4">
      <SeverityChart data={data}/>
    </div>
</div>

    </div>
  )
}

export default Charts
