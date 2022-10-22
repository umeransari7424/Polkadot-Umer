import React from "react";

function Run() {
  return (
    <div className="runbg">
      <div className="container text-center py-5">
        <div className="row py-5">
          <h1 className="heading">
            Run a node and interact with the Polkadot testnet
          </h1>
        </div>
        <div className="row">
          <div className="col-md-6 text-start">
            <h5>
              If you'd like to play with Polkadot, you'll need to install and
              run the Parity Polkadot client. <br /> Get the client at &nbsp;
              <span class="badge rounded-pill text-bg-danger">Parity Polkadot repo</span>
            </h5>
            <h5>
              Alexander is the current default public testnet for Polkadot. By
              default, any node running on the Alexander testnet will appear on
              the <span class="badge rounded-pill text-bg-danger">telemetry.polkadot.io</span>
            </h5>
            <h5>
            The testnet allows you to create accounts, propose governance referenda, stake testnet DOT to become a validator or nominate other accounts as validators with your testnet DOT.
            </h5>
          </div>
          <div className="col-md-6 text-start">
            <h5>
            Connect your running node to the main <br />
            <span class="badge rounded-pill text-bg-danger">Polkadot user interface</span> &nbsp;
             to play around.
            </h5>
            <h5>
            Get testnet DOT to stake by following these instructions on the
            <span class="badge rounded-pill text-bg-danger">Polkadot Wiki</span> 
            </h5>
            <h5>
            If you don’t want to run a node, you can still interact with the network by using
            <span class="badge rounded-pill text-bg-danger">the explorer</span> 

            </h5>
            <h5>
            Before interacting with the testnet, please read this
            <span class="badge rounded-pill text-bg-danger">Legal notice</span> 
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Run;
