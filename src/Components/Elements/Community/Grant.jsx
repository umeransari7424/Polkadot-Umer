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
            <h1 className="heading">Apply for funding from the Polkadot treasury</h1> <br />
            <h5>
                
            The Polkadot community supports projects that benefit the network with funding from the Polkadot treasury, an on-chain pot of DOT tokens. Submit a proposal for a project related to software, infrastructure, or app development, marketing, community outreach, educational initiatives, and more.
            </h5> <br />
            <button type="button" class="btn btn-danger">Learn more</button>

            <br /><br />
            <h1 className="heading">Become a Polkadot Ambassador</h1> <br />
            <h5>
            Check out the post and apply to join the vibrant polkadot community.
            </h5> <br />
            <button type="button" class="btn btn-danger">Apply to become an Ambassador</button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Grant;
