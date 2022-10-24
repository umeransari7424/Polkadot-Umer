import React from 'react'

function Interoparaility() {
  return (
    <div className='interoparaility'>
        <div className='container py-5'>

        <div className="row py-2">
          <div className="col-md-4 col-12 mb-4 text-start">
            <div className="card " style={{  height: "25rem" }}>
              <img
                src="Assets/home-icon1.svg"
                className="image-fluid"
                alt="image1"
                style={{width: "100px",padding: "20px"}}
                />

              <div className="card-body">
                <br />
                <h5 className="card-title">True interoperability</h5>
                <p className="card-text">
                Polkadot enables cross-blockchain transfers of any type of data or asset, not just tokens. Connecting to Polkadot gives you the ability to interoperate with a wide variety of blockchains in the Polkadot network.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-start">
            <div className="card" style={{  height: "25rem" }}>
              <img
                src="Assets/home-icon2.svg"
                className=" image-fluid"
                alt="image1"
                style={{width: "100px",padding: "20px"}}
                />

              <div className="card-body">
                <br />
                <h5 className="card-title">Economic & transactional scalability</h5>
                <p className="card-text">
                Polkadot provides unprecedented economic scalability by enabling a common set of validators to secure multiple blockchains. Polkadot provides transactional scalability by spreading transactions across multiple parallel blockchains.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-start">
            <div className="card" style={{ height: "25rem" }}>
              <img
                src="Assets/home-icon3.svg"
                className="card-img-top image-fluid"
                alt="image1"
                style={{width: "200px",padding: "20px"}}
                />

              <div className="card-body">
                <br />
                <h5 className="card-title">Easy blockchain innovation</h5>
                <p className="card-text">
                Create a custom blockchain in minutes using the Substrate framework. Connect your chain to Polkadot and get interoperability and security from day one. This ease of development helps Polkadot's network grow.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-2">
          <div className="col-md-4 col-12 mb-4 text-start">
            <div className="card" style={{  height: "25rem" }}>
              <img
                src="Assets/home-icon4-b.svg"
                className="card-img-top image-fluid"
                alt="image1"
                style={{width: "200px",padding: "20px"}}
                />

              <div className="card-body">
                <br />
                <h5 className="card-title">High energy efficiency</h5>
                <p className="card-text">
                Polkadot consumes a small fraction of the energy used by conventional blockchains thanks to its next-generation nominated proof-of-stake (NPoS) model. Using the equivalent of ~6.6 US households worth of energy per year, Polkadot has the lowest carbon footprint among proof-of-stake protocols analyzed in recent research.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-start">
            <div className="card" style={{  height: "25rem" }}>
              <img
                src="Assets/home-icon5.svg"
                className="card-img-top image-fluid"
                alt="image1"
                style={{width: "200px",padding: "20px"}}
                />

              <div className="card-body">
                <br />
                <h5 className="card-title">Security for everyone</h5>
                <p className="card-text">
                Polkadot's novel data availability and validity scheme allows chains to interact with each other in a meaningful way. Chains remain independent in their governance, but united in their security.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mb-4 text-start">
            <div className="card" style={{  height: "25rem" }}>
              <img
                src="Assets/home-icon6.svg"
                className="card-img-top image-fluid"
                alt="image1"
                style={{width: "200px",padding: "20px"}}
                />

              <div className="card-body">
                <br />
                <h5 className="card-title">User-driven governance</h5>
                <p className="card-text">
                Polkadot has a sophisticated governance system where all stakeholders have a voice. Network upgrades are coordinated on-chain and enacted autonomously and without forking the network, ensuring that Polkadot’s development remains future-proof and community-driven.
                </p>
              </div>
            </div>
          </div>
        </div> <br /><br /><br /><br /><br />
        <div className="row text-center pb-5">
          <div>
            <h1 className='heading'>Learn more about Polkadot's <br /> technology</h1> <br />
          </div> <br />  <br />
          
          <div>
          <button type="button" class="btn btn-danger">Discover Polkadot</button>

          </div>{" "}
          <br />
        </div>
    </div>
                </div>
  )
}

export default Interoparaility