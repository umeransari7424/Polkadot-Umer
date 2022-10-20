import React from 'react'

function Hero() {
  return (
    <div className='hero'>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6 vision">
                    <h1>The multichain vision for Web3 starts here.</h1>
                    <br />
                    <p>Polkadot unites and secures a growing ecosystem of specialized blockchains called parachains. Apps and services on Polkadot can securely communicate across chains, forming the basis for a truly interoperable decentralized web.</p>
                    <br />
                    <div>
                    <button type="button" class="btn btn-outline-danger">Learn Parachains</button> &nbsp; &nbsp; &nbsp;
                    <button type="button" class="btn btn-outline-danger">Learn Cross-Chains</button>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className='herobgimg'>

                    <img className='img-fluid' src="Assets/xcm-animation-inner.png"  alt="animation" />
                    </div>

                    
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero