import React from "react";

function General() {
  return (
    <div className="generalbg">
      <div className="container py-5">
        <div className="row text-center py-5">
          <h1 className="heading"> Get in Touch</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card my-2  ">
              <div className="github">
                <div>
                  <img
                    className="img-fluid"
                    style={{ width: "50px" }}
                    src="Assets/logo-circle-chat.svg"
                    alt="github"
                  />
                </div>{" "}
                &nbsp; &nbsp;
                <div className="general">
                  <h3 >For general chat</h3>
                  <h5>Join the Watercooler or Discord</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-2 ">
              <div className="github">
                <div>
                  <img
                    className="img-fluid"
                    style={{ width: "50px" }}
                    src="Assets/logo-circle-newsletter.svg"
                    alt="github"
                  />
                </div>{" "}
                &nbsp; &nbsp;
                <div className="general">
                  <h3>For press inquiries</h3>
                  <h5>Please fill out this form</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-2 ">
              <div className="github">
                <div>
                  <img
                    className="img-fluid"
                    style={{ width: "50px" }}
                    src="Assets/logo-circle-email.svg"
                    alt="github"
                  />
                </div>{" "}
                &nbsp; &nbsp;
                <div className="general">
                  <h3>For all other inquiries</h3>
                  <h5>support.polkadot.network</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center py-5">
        <div className="row">
          <div className="col-md-5">
            <h1 className="heading">Stay informed of updates and events</h1>
            <p>Subscribe to the newsletter or read the blog</p>
          </div>
          <div className="col-md-2">
            <div
              className="d-flex line"
              style={{ height: "130px" ,color: "white" }}
            >
              <div className="vr"></div>
            </div>
          </div>
          <div className="col-md-5">
            <h1 className="heading">Join the teams building Polkadot</h1>
            <p>See jobs at Web3 Foundation or at Parity Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default General;
