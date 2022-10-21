import React from 'react'

function Connectingdot() {
  return (
    <div className='connect'>
        <div className="container py-5 ">
            <div className="row py-4">
                <h1 className='heading'>Connecting the dots</h1>
            </div>
            <div className="row">
                <div className="col-md-3 mb-2 text-center">
                    <div className="card p-3">
                        <img className='img-fluid relyimg' style={{width:"120px"}} src="Assets/icon-glossary-relay-chain.svg" alt="rely-chain" />
                        <br />
                        <b className='rely text-start'>Relay Chain</b>
                        <p className='text-start'>The heart of Polkadot, responsible for the network’s shared security, consensus and cross-chain interoperability.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2 text-center">
                    <div className="card p-3">
                        <img className='img-fluid relyimg' style={{width:"120px"}} src="Assets/icon-glossary-parachain.svg" alt="rely-chain" />
                        <br />
                        <b className='rely text-start'>Parachains</b>
                        <p className='text-start'>Sovereign blockchains that can have their own tokens and optimize their functionality for specific use cases.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2 text-center">
                    <div className="card p-3">
                        <img className='img-fluid relyimg' style={{width:"120px"}} src="Assets/icon-glossary-parathread.svg" alt="rely-chain" />
                        <br />
                        <b className='rely text-start'>Parathreads</b>
                        <p className='text-start'>Similar to parachains but with a pay-as-you-go model. More economical for blockchains that don’t need continuous connectivity to the network.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2 text-center">
                    <div className="card p-3">
                        <img className='img-fluid relyimg' style={{width:"120px"}} src="Assets/icon-glossary-bridge.svg" alt="rely-chain" />
                        <br />
                        <b className='rely text-start'>Bridges</b>
                        <p className='text-start'>Allow parachains and parathreads to connect and communicate with external networks like Ethereum and Bitcoin.</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="row py-4">
                <h1 className='heading'>Consensus Roles</h1>
            </div>
            <div className="row">
                <div className="col-md-3 mb-2 text-center">
                    <div className="card p-3">
                        <img className='img-fluid relyimg' style={{width:"120px"}} src="Assets/icon-glossary-nominator.svg" alt="rely-chain" />
                        <br />
                        <b className='rely text-start'>Nominator</b>
                        <p className='text-start'>The heart of Polkadot, responsible for the network’s shared security, consensus and cross-chain interoperability.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2 text-center">
                    <div className="card p-3">
                        <img className='img-fluid relyimg' style={{width:"120px"}} src="Assets/icon-glossary-validator.svg" alt="rely-chain" />
                        <br />
                        <b className='rely text-start'>Validator</b>
                        <p className='text-start'>Sovereign blockchains that can have their own tokens and optimize their functionality for specific use cases.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2 text-center">
                    <div className="card p-3">
                        <img className='img-fluid relyimg' style={{width:"120px"}} src="Assets/icon-glossary-collator.svg" alt="rely-chain" />
                        <br />
                        <b className='rely text-start'>Collator</b>
                        <p className='text-start'>Similar to parachains but with a pay-as-you-go model. More economical for blockchains that don’t need continuous connectivity to the network.</p>
                    </div>
                </div>
                
            </div>
            <div className="row py-4">
                <h1 className='heading'>Governance Roles</h1>
            </div>
            <div className="row">
                <div className="col-md-3 mb-2 text-center">
                    <div className="card p-3">
                        <img className='img-fluid relyimg' style={{width:"120px"}} src="Assets/icon-glossary-council-member-2.svg" alt="rely-chain" />
                        <br />
                        <b className='rely text-start'>Council Members</b>
                        <p className='text-start'>Elected to represent passive stakeholders in two primary governance roles: proposing referenda and vetoing dangerous or malicious referenda.</p>
                    </div>
                </div>
                <div className="col-md-3 mb-2 text-center">
                    <div className="card p-3">
                        <img className='img-fluid relyimg' style={{width:"120px"}} src="Assets/icon-glossary-technical-committee-2.svg" alt="rely-chain" />
                        <br />
                        <b className='rely text-start'>Technical Committee</b>
                        <p className='text-start'>Composed of teams actively building Polkadot. Can propose emergency referenda, together with the council, for fast-tracked voting and implementation.</p>
                    </div>
                </div>
               
                
            </div>
        </div>
    </div>
  )
}

export default Connectingdot