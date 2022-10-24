import React from "react";
import  { ScrollRotate } from 'react-scroll-rotate';

function Hero() {
  return (
    <div className="hero">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 pb-5 vision">
            <h1 className="heading">
              The multichain vision for Web3 starts here.
            </h1>
            <br />
            <p>
              Polkadot unites and secures a growing ecosystem of specialized
              blockchains called parachains. Apps and services on Polkadot can
              securely communicate across chains, forming the basis for a truly
              interoperable decentralized web.
            </p>
            <br />
            <div className="text-start">
              <button type="button" className="btn btn-danger mb-2">
                Learn Parachains{" "}
              </button>{" "}
              &nbsp; &nbsp; &nbsp;
              <button type="button" className="btn btn-danger mb-2">
                Learn Cross-Chains
              </button>
              {/* <div className="button_slide slide_right">BUTTON: SLIDE RIGHT </div> */}
            </div>
          </div>
          <div className="col-md-6 heroimg">
          <ScrollRotate method={"perc"} loops={2}	>
            <div className="bgimg">
              <div className="outerimg"> 
             
                <div className="innerimg"> </div>
              </div>
            </div>
              </ScrollRotate>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
