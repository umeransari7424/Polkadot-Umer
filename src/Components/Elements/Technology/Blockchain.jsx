import React from 'react'

function Blockchain() {
  return (
    <div className='blockchainbg'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-7 mt-5 blockchain"> 
                <img className='img-fluid' src="Assets/dg-network.svg" alt="network" />               
                 </div>
                 <div className="col-md-4 p-3">
                    <h1>Any type of data across any type of blockchain</h1>
                    <h5>Polkadot is a network protocol that allows arbitrary data—not just tokens—to be transferred across blockchains.</h5>
                    <p>
                    This means Polkadot is a true multi-chain application environment where things like cross-chain registries and cross-chain computation are possible.
                    </p>
                    <p>
                    Polkadot can transfer this data across public, open, permissionless blockchains as well as private, permissioned blockchains.
                    </p>
                    <p>
                    This makes it possible to build applications that get permissioned data from a private blockchain and use it on a public blockchain. For instance, a school's private, permissioned academic records chain could send a proof to a degree-verification smart contract on a public chain.
                    </p>
                 </div>
            </div>
        </div>

    </div>
  )
}

export default Blockchain