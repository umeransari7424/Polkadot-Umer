import React from 'react'

function Parachains() {
  return (
    <div className='parachainbg'>
        <div className="container text-center py-5">
            <div className="row py-5">
                <h1>Parachains: parallel <br />  transaction processing</h1>
            </div>
            <div className="row text-start py-5">
                <div className="col-md-5 ">
                    <h5 className='para'>
                    Parachains are specialized blockchains that connect to Polkadot. They will have characteristics specialized for their use cases and the ability to control their own governance.
                    </h5>
                    <h5 className='para'>
                    Interactions on parachains are processed in parallel, enabling highly scalable systems.
                    </h5>
                    <h5 className='para'>
                    Transactions can be spread out across the chains, allowing many more transactions to be processed in the same period of time.
                    </h5>
                    <br />
                    <button type="button" class="btn btn-primary"><b>Learn More About Parachains</b></button>


                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3">
                    <h4>Current method:</h4>
                    <h4>Single transaction</h4>
                    <img src="Assets/dg-transactions-old.svg" alt="transaction" className="img-fluid" />
                </div>

                <div className="col-md-3">
                <h4>Polkadot method:</h4>
                    <h4>Multi parallelized transactions</h4>
                    <img src="Assets/dg-transactions-new.svg" alt="transaction" className="img-fluid" />
                </div>

            </div>
        </div>

    </div>
  )
}

export default Parachains