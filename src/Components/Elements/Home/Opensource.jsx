import React from "react";

function Opensource() {
  return (
    <div className="openbg">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="heading">An open-source protocol built for everyone</h1>
          </div>
          <div className="col-md-6">
            <h3>
              Polkadot is an open-source project founded by the Web3 Foundation. <br /> <br />
              Web3 Foundation has commissioned five teams and over 100
              developers to build Polkadot, including
            </h3>
          </div>
        </div> <br /><br />
        <div className="row text-center py-5">
            <div className="col-md-3">
                <img src="Assets/logo-circle-parity-white.svg" style={{width:"100px"}} alt="parity" />
            </div>
            <div className="col-md-3">
                <img src="Assets/logo-circle-chainsafe-white.svg" style={{width:"100px"}} alt="parity" />
            </div>
            <div className="col-md-3">
                <img src="Assets/logo-circle-soramitsu-white.svg" style={{width:"100px"}} alt="parity" />
            </div>
            <div className="col-md-3">
                <img src="Assets/logo-circle-polkadot-js-white.svg" style={{width:"100px"}} alt="parity" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Opensource;
