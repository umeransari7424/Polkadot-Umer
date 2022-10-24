import React from 'react'

function Github() {
  return (
    <div className='gitbg '>
        <div className="container  py-5">
            <div className="row">
                <div className="col-md-4 git ">
                    <div className="card m-1 p-2 ">
                        <div className='github'>                           
                            <div>
                        <img className='img-fluid' style={{width:"50px"}} src="Assets/logo-circle-github.svg" alt="github" />
                        </div> &nbsp; &nbsp;
                        <div>
                            <h2>GitHub</h2>
                            <h5>Latest Version & History</h5>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 git git2 ">
                    <div className="card m-1 p-2 ">
                        <div className='github'>
                           
                            <div>
                        <img className='img-fluid' style={{width:"50px"}} src="Assets/logo-circle-documentation.svg" alt="github" />
                        </div> &nbsp; &nbsp;
                        <div>
                            <h2>Documentation</h2>
                            <h5>Read the Documentation</h5>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 git git2 ">
                    <div className="card m-1 p-2 ">
                        <div className='github'>
                           
                            <div>
                        <img className='img-fluid' style={{width:"50px"}} src="Assets/logo-circle-element.svg" alt="github" />
                        </div> &nbsp; &nbsp;
                        <div>
                            <h2>Element Chat</h2>
                            <h5>Get Your Question Answered</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Github