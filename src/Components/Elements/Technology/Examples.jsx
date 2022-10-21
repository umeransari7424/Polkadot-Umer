import React from 'react'

function Examples() {
  return (
    <div className='example'>
        <div className="container text-center py-5">
            <div className="row py-5">
                <h1>What are teams building on <br /> Polkadot? Just a few examples:</h1>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                    <div className="card text-start p-3 m-2" style={{  height: "9rem" }}>
                        <h5> <b>Data curation networks</b> that connect all file storage chains into curated data sets</h5>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="card  text-start m-2 p-3" style={{  height: "9rem" }}>
                        <h5> <b>Oracle chains</b>  that make off-chain data available to all contracts on the Polkadot network (ChainLink)</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card  text-start m-2 p-3" style={{  height: "9rem" }}>
                        <h5> <b>Smart contract chains</b> with WebAssembly smart contracts (Astar, Moonbeam)</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                    <div className="card text-start p-3 m-2" style={{  height: "12rem" }}>
                        <h5> <b>Identity chains </b>  that link accounts to a persistent identity and enable access to other parachains through fewer accounts (Kilt)</h5>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="card  text-start m-2 p-3" style={{  height: "12rem" }}>
                        <h5> <b>Financial chains </b>  that allow you to hold all your assets in one portfolio, including via bridges to Bitcoin, Ethereum, Bitcoin Cash, Litecoin and ZCash (Acala, Parallel Finance)</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card  text-start m-2 p-3" style={{  height: "12rem" }}>
                        <h5> <b>Internet of Things chains</b> that set IoT standards for machine-to-machine communication (Robonomics)</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                    <div className="card text-start p-3 m-2" style={{  height: "9rem" }}>
                        <h5> <b>Zero Knowledge</b>  privacy chains, or bridges to existing ZK-snarks chains</h5>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="card  text-start m-2 p-3" style={{  height: "9rem" }}>
                        <h5> <b>File storage chains</b>  that incentivize storing data on-chain</h5>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card  text-start m-2 p-3" style={{  height: "9rem" }}>
                        <h5> <b>Bridge to Ethereum,</b> allowing Ethereum smart contracts to interact with the Polkadot network</h5>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Examples