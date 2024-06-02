import InfoBox from "../Compnents/InfoBox"


function Containers() {
  return (
    <div> 
      <div className="container text-center">
  <div className="row">
    <div className=" align-self-start " style={{width:"100%"}}>
      <InfoBox/>
    </div>
    <div className=" align-self-center"  style={{width:"100%"}}>
    <InfoBox/>
    </div>
    <div className="align-self-end"  style={{width:"100%"}}>
    <InfoBox/>
    </div>
  </div>
</div>
    </div>
  )
}

export default Containers