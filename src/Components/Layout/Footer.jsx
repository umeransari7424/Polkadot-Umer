import React from 'react';
import {AiFillTwitterCircle , AiFillRedditCircle , AiFillGithub ,AiFillYoutube} from 'react-icons/ai';
 import {FaDiscord} from 'react-icons/fa';
function Footer() {
  return (
    <div className='footerbg'>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    <h2>General</h2> <br />
                    <ul className='footer-list list-unstyled'>
                        <li>About </li>
                        <li>Telemetry </li>
                        <li>Roadmap </li>
                        <li>FAQ </li>
                        <li>Support </li>
                        <li>Build </li>
                        <li>Grants And Bounties </li>
                        <li>Careers </li>
                    </ul>

                </div>
                <div className="col-md-3">
                    <h2>Technology</h2> <br />
                    <ul className='footer-list list-unstyled'>
                        <li>About </li>
                        <li>Telemetry </li>
                        <li>Roadmap </li>
                        <li>FAQ </li>
                        <li>Support </li>
                        <li>Build </li>
                        <li>Grants And Bounties </li>
                        <li>Careers </li>
                    </ul>

                </div>
                <div className="col-md-3">
                    <h2>Community</h2> <br />
                    <ul className='footer-list list-unstyled'>
                        <li>About </li>
                        <li>Telemetry </li>
                        <li>Roadmap </li>
                        <li>FAQ </li>
                        <li>Support </li>
                        <li>Build </li>
                        <li>Grants And Bounties </li>
                        <li>Careers </li>
                    </ul>

                </div>
                <div className="col-md-3">
                    <div>
                    <AiFillTwitterCircle size={"40px"}/> &nbsp;&nbsp;
                    <AiFillRedditCircle size={"40px"}/> &nbsp;&nbsp;
                    <AiFillGithub size={"40px"}/> &nbsp;&nbsp;
                    <AiFillYoutube size={"40px"}/> &nbsp;&nbsp;
                    <FaDiscord size={"40px"}/> 
                    </div> <br />
                    <div>
                        <h3>Subscribe to the newsletter to hear about Polkadot updates and events.</h3>
                    </div> <br />
                    <div>
                    <button type="button" class="btn btn-danger">Subscribe</button>

                    </div>

                </div>

            </div>
            <div className="row">

            </div> <br />
            <hr />
            <br />
            <br />

            <div className="row ">
                <div>

                <img className='img-fluid' src="Assets/logo-polkadot-light.svg" style={{width:"200px"}} alt="polkadot" />  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
             
                <span>
                © 2022
                </span>  &nbsp; 
                <a href='/'>Web 3 Foundation</a> &nbsp;
                <span>| </span> &nbsp;
                <a href='/'>Impressum</a>&nbsp;
                <span>| </span> &nbsp;
                <a href='/'>Disclaimer</a>&nbsp;
                <span>| </span> &nbsp;
                <a href='/'>Privacy</a>&nbsp;
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer