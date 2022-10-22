import React from "react";

function Run() {
  return (
    <div className="easilybg">
      <div className="container text-center py-5">
        <div className="row py-5">
          <h1 className="heading">
          Easily build a Polkadot parachain with Substrate
          </h1> <br />
          <h4 >Build your application-specific blockchain with the Substrate framework now and easily connect it to Polkadot after launch.</h4>
        </div>
        <div className="row">
          <div className="col-md-4 text-start">
            <h1>Native Polkadot compatibility</h1>
            <h5>
            Blockchains built with Substrate are natively compatible with Polkadot, so they can be easily connected to Polkadot as a parachain or parathread.
            </h5>
            <br /><br />
            <h1>Interchain connectivity</h1>
            <h5>
            By connecting your blockchain to Polkadot, your blockchain will be able to pass arbitrary messages to other chains in the Polkadot network. 
            </h5>
            
          </div>
          <div className="col-md-4 text-start">
            <h1>Fork-free upgrades</h1>
            <h5>
            Upgrade your blockchain without a hard fork. Your runtime is a Wasm binary stored on-chain and can be updated using your chain’s governance mechanism.
            </h5>
            <br /><br />
            <h1>Instant security</h1>
            <h5>
            Simply by connecting your blockchain to Polkadot, your blockchain will be secured by Polkadot’s pooled security. 
            </h5>
            
          </div>
          <div className="col-md-4 text-start">
            <h1>Plug-and-play modular framework</h1>
            <h5>
            Substrate allows you to simply plug in the functionalities you need, while also giving you the freedom to customize as needed.
            </h5>
            <br /><br />
            <h1>Multiple languages</h1>
            <h5>
            With Substrate, you can write your blockchain logic in any language that can compile to WebAssembly (Rust, C/C++, C#, Go, etc).
            </h5>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Run;
