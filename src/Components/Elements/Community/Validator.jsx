import React from 'react'

function Validator() {
  return (
    <div className='validatorbg'>
        <div className="container">
            <div className="row py-5">
                <h1 className='heading'>Become a validator</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <b className='heading1'>1. Set up your machine</b> <br />
                    <p>
                    In addition to any usual CLI parameters that you run polkadot with, you'll need to add an extra two:
                    </p>  <br />
                    <ul>
                        <li> <span className='validator'>--validator </span> This tells your node to try to validate when it sees itself as a listed authority on the network;</li>
                        <li> <span className='validator'>--key SEED </span> This provides your node with a secret key that lets it know whether it's a listed authority on the network, and, if it is, lets it sign statements to authorise the creation of new blocks.</li>
                    </ul>

                </div>
                <div className="col-md-6">
                    <b className='heading1'>2. Apply to validate</b> <br />
                    <p>
                    New validators will be chosen every 24 hours on mainnet. You’ll need to create separate accounts for Controller, Session, and Stash keys on the Polkadot UI  These accounts will be used to represent and control the validator node you just set up
                    </p>  
                    <p>
                    Next you will need to get some DOT from the faucet or by asking on Element. Assuming you have more DOT than the lowest staked validator or there is an open validator slot, you can register to be staked. A step-by-step guide demonstrating how to set up your accounts and bond your DOT is available on the wiki.
                    </p>

                </div>
            </div>

        </div>
        <div className="container text-center invovled">
        <div>
          <h1>Want to become a validator?</h1>
        </div>{" "}
        <br />
        <div>
          <button type="button" class="btn btn-danger">
            Learn more
          </button>
        </div>{" "}
        <br />
        <div>
            <p>

          <span>
          You can see validator stats on  &nbsp;
            <a href="/">Telemetry</a>.
          </span>
            </p>
        </div>
      </div>
        
    </div>
  )
}

export default Validator