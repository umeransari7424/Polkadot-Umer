import React from "react";

function Opensource() {
  return (
    <div className="openbg">
      <div className="container  py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="openheading">Who's building Polkadot?</h1> <br />
            <p>
            Polkadot is the flagship project by Web3 Foundation, a Swiss Foundation founded to facilitate a fully functional and user-friendly decentralized web
            </p>

          </div>
          <div className="col-md-6">
            <p>
            The Web3 Foundation is partnering with best-in-class entities to build Polkadot and foster development of the services and applications that will run on it.
            </p>
            <p>
            Researchers from Inria Paris and ETH Zurich, developers from Parity Technologies, and capital partners from crypto-funds such as Polychain Capital are all working together to develop a superlative realization of Web3, with Polkadot at its core.
            </p>
            <p>
            Web3 Foundation is providing grants for development of the ecosystem.
            </p>
          </div>
        </div> <br /><br />
        <div className="row text-center py-5">
            <div className="col-md-3">
                <img className="img-fluid m-1" src="Assets/logo-circle-parity-white.svg" style={{width:"100px"}} alt="parity" />
            </div>
            <div className="col-md-3">
                <img className="img-fluid m-1" src="Assets/logo-circle-chainsafe-white.svg" style={{width:"100px"}} alt="parity" />
            </div>
            <div className="col-md-3">
                <img className="img-fluid m-1" src="Assets/logo-circle-soramitsu-white.svg" style={{width:"100px"}} alt="parity" />
            </div>
            <div className="col-md-3">
                <img className="img-fluid m-1" src="Assets/logo-circle-polkadot-js-white.svg" style={{width:"100px"}} alt="parity" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Opensource;
