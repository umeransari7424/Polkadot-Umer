import React from "react";

function Hero() {
  return (
    <div className="buildhero">
      <div className="container text-center py-5">
        <h1 className="heading">
        Build on Polkadot
        </h1>
        <h4>
        Polkadot is 100% open-source. Anyone can contribute to the codebase, run a node, <br />
or build services on Polkadot. You can even get a grant.
        </h4> <br />
        <button type="button" class="btn btn-danger">
            Start Building
          </button>
      </div>
    </div>
  );
}

export default Hero;
