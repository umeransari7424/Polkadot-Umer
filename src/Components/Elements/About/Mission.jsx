import React from 'react'

function Mission() {
  return (
    <div className='missionbg'>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className='heading'>The Polkadot <br /> mission</h1> <br />
                    <p>We envision a Web where our identity and our data is our own - safely secured from any central authority.</p>
                </div>
                <div className="col-md-6">
                    <p>
                    Polkadot will enable a completely decentralized web where users are in control.
                    </p>
                    <p>
                    Polkadot is built to connect private and consortium chains, public and permissionless networks, oracles, and future technologies that are yet to be created. Polkadot facilitates an internet where independent blockchains can exchange information and transactions in a trustless way via the Polkadot relay chain.
                    </p>
                    <p>
                    Polkadot makes it easier than ever to create and connect decentralized applications, services, and institutions. By empowering innovators to build better solutions, we seek to free society from its reliance on a broken web where its large institutions can’t violate our trust.
                    </p>
                    <br />
                    <button type="button" class="btn btn-danger">
            Learn About the Technology
          </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Mission