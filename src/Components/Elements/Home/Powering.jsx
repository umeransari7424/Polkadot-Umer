import React from "react";

function Powering() {
  return (
    <div className="powerbg">
      <div className="container text-center py-5">
        <div className="row py-5">
          <h1 className="heading">Powering the Polkadot network</h1>
          <br />
          <p>
            The DOT token serves three distinct purposes: governance over the
            network, staking and bonding.
          </p>
        </div>{" "}
        <br /> <br />
        <div className="row py-5">
          <div className="col-md-4 col-12 mb-4 text-start">
            <div className="card" style={{height: "36rem" }}>
              <img
                src="Assets/governance.svg"
                className="card-img-top image-fluid"
                alt="image1"
              />

              <div className="card-body">
                <br />
                <h5 className="card-title">Governance</h5>
                <p className="card-text">
                  Polkadot token holders have complete control over the
                  protocol. All privileges, which on other platforms are
                  exclusive to miners, will be given to the Relay Chain
                  participants (DOT holders), including managing exceptional
                  events such as protocol upgrades and fixes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-start">
            <div className="card" style={{  height: "36rem" }}>
              <img
                src="Assets/staking.svg"
                className="card-img-top image-fluid"
                alt="image1"
              />

              <div className="card-body">
                <br />
                <h5 className="card-title">Staking</h5>
                <p className="card-text">
                  Game theory incentivizes token holders to behave in honest
                  ways. Good actors are rewarded by this mechanism whilst bad
                  actors will lose their stake in the network. This ensures the
                  network stays secure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-start">
            <div className="card" style={{ height: "36rem" }}>
              <img
                src="Assets/bonding.svg"
                className="card-img-top image-fluid"
                alt="image1"
              />

              <div className="card-body">
                <br />
                <h5 className="card-title">Bonding</h5>
                <p className="card-text">
                  New parachains are added by bonding tokens. Outdated or
                  non-useful parachains are removed by removing bonded tokens.
                  This is a form of proof of stake.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-5">
          <div>
            <h1 className="heading">Want to get involved?</h1>
          </div>{" "}
          <br /> <br /><br /> <br />
          <div>
          <button type="button" class="btn btn-danger">Discover DOT</button>

          </div>{" "}
          <br />
        </div>
      </div>
    </div>
  );
}

export default Powering;
