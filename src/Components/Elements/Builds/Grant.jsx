import React from "react";

function Grant() {
  return (
    <div className="grantbg">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="heading">Get a grant to build the Polkadot ecosystem</h1> <br />
            <h5>
                
            Web3 Foundation provides grants to steward research and development of Polkadot and the Web3 tech stack. The program funds work on runtime modules and parachains, development tools, UI, protocol integrations, maintenance, and more
            </h5> <br />
            <button type="button" class="btn btn-danger">Learn more</button>

          </div>
          <div className="col-md-6">
            <ul>
              <li>Development and deployment tooling (e.g. IDEs, parachain development kits)</li>
              <li>Polkadot Runtime Modules (e.g. interoperability, governance)</li>
              <li>Second layer protocols (e.g. dedicated parachains, state channels)</li>
              <li>Monitoring (e.g. explorers)</li>
              <li>Protocol integrations (e.g. bridges to other blockchains, distributed file storage)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center invovled">
        <div>
          <h1>Have a question about <br /> building on Polkadot?</h1>
        </div>{" "}
        <br />
        <div>
          <button type="button" class="btn btn-danger">
            Let's Connent
          </button>
        </div>{" "}
        <br />
      
      
      </div>
    </div>
  );
}

export default Grant;
