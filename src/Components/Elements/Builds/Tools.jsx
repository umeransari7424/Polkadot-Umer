import React from 'react'

function Tools() {
  return (
    <div className='tools'>
        <div className="container text-center py-5">
            <div className="row py-5">
                <h1>Tools that come with Substrate</h1>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                    <div className="card text-start p-3 m-2" style={{  height: "9rem" }}>
                    <h5> <b className='toolbold'>Polkadot Telemetry Service</b> <br /> Network information</h5>
                        

                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="card  text-start m-2 p-3" style={{  height: "9rem" }}>
                        <h5> <b className='toolbold'>Substrate and Polkadot UI</b> <br />  Built with React.js and RxJS</h5>
                        

                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card  text-start m-2 p-3" style={{  height: "9rem" }}>
                        <h5> <b className='toolbold'>Substrate UI</b> <br /> Built with the Bonds oo7 library</h5>
                    </div>
                    

                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                    <div className="card text-start p-3 m-2" style={{  height: "9rem" }}>
                        <h5> <b className='toolbold'> Polkabot</b> <br /> Network monitoring and reporting</h5>
                    </div>
                   

                </div>
                <div className="col-md-4 ">
                    <div className="card  text-start m-2 p-3" style={{  height: "9rem" }}>
                        <h5> <b className='toolbold'> Polkascan </b> <br /> Blockchain data explorer and analytics</h5>
                       

                    </div>
                </div>
                
            </div>
            
        </div>
        <div className="container text-center invovled">
        <div>
          <h1>Start building your custom <br /> parachain with Substrate</h1>
        </div>{" "}
        <br />
        <div>
          <button type="button" class="btn btn-danger">
            Subtrate Developer Hub
          </button>
        </div>{" "}
        <br />
        <div>
            <p>

          <span>
          or   &nbsp;
            <a href="/">Learn More</a>.
          </span>
            </p>
        </div>
      </div>
        
    </div>
  )
}

export default Tools