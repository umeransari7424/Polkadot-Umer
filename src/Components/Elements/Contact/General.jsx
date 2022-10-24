import React from "react";

function General() {
  return (
    <div className="generalbg">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-1 git git2">
              <div className="github">
                <div>
                  <img
                    className="img-fluid"
                    style={{ width: "50px" }}
                    src="Assets/logo-circle-element.svg"
                    alt="github"
                  />
                </div>{" "}
                &nbsp; &nbsp;
                <div className="general">
                  <h3 >GitHub</h3>
                  <h5>Latest Version & History</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-1 git git2">
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
                  <h3>Documentation</h3>
                  <h5>Read the Documentation</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-1 git git2">
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
                  <h3>Element Chat</h3>
                  <h5>Get Your Question Answered</h5>
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
