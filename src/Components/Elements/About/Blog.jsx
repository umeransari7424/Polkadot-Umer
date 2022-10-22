import React from "react";

function Blog() {
  return (
    <div className="blog">
      <div className="container text-center py-5">
        <div className="row">
          <h1 className="heading">From The Blog</h1>
        </div>{" "}
        <br /> <br />
        <div className="row">
          <div className="col-md-4 col-12  text-start">
            <div className="card mb-2" style={{  height: "36rem" }}>
              <img
                src="Assets/image1.png"
                className="card-img-top image-fluid"
                alt="image1"
              />

              <div className="card-body">
                <span className="blogspan">Parachain</span> <br /> <br />
                <h5 className="card-title">
                  First Parachain Successfully Migrates from Kusama to Polkadot
                </h5>
                <p className="card-text">
                  KILT Protocol's migration from Kusama to Polkadot is an
                  important technical milestone and the first parachain
                  migration. Polkadot's 'canary network' model allows Web3....
                </p>
               
              </div>
              <div className="card-footer">
              <img src="Assets/logo-polkadot.svg" width={"140px"} alt="PorkSwap" />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12  text-start">
            <div className="card mb-2" style={{ height: "36rem" }}>
              <img
                src="Assets/image2.png"
                className="card-img-top image-fluid"
                alt="image1"
              />

              <div className="card-body">
                <span className="blogspan">Parachain</span> <br /> <br />
                <h5 className="card-title">Polkadot Roadmap Roundup</h5>
                <p className="card-text">
                  A proposed roadmap for upcoming developments on Polkadot. Get
                  the latest status on asynchronous backing, parathreads, XCMv3,
                  governance, common-good parachains and more...
                </p>
               
              </div>
              <div className="card-footer">
              <img src="Assets/logo-polkadot.svg" width={"140px"} alt="PorkSwap" />
                 
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 text-start">
            <div className="card mb-2" style={{ height: "36rem" }}>
              <img
                src="Assets/image3.jpg"
                className="card-img-top image-fluid"
                alt="image1"
              />

              <div className="card-body">
                <span className="blogspan">Parachain</span> <br /> <br />
                <h5 className="card-title">
                  Sub0, the Polkadot Developer Conference, comes to Lisbon in
                  November
                </h5>
                <p className="card-text">
                  The two-day live sub0 conference will run on November
                  28th-29th. Featuring keynote presentations, breakout sessions,
                  workshops & side events. Sign up for ticket updates....
                </p>
              </div>
              <div className="card-footer">
              <img src="Assets/logo-polkadot.svg" width={"140px"} alt="PorkSwap" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container text-center invovled'>

<div>

<h1 className='heading'>
Want to get involved?
</h1> 
</div> <br />
<div>
<button type="button" class="btn btn-danger">Join the Community</button>

</div> <br />

</div>
    </div>
  );
}

export default Blog;
