import React from 'react'

function Thumb() {
  return ( <>
           <section id="sec3">
            <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h1 className="we">We make it easy to get started</h1>
                  </div>
              </div>
              <div className="row last">
                <div className="col-md-4">
                    <div className="thumbnails">
                <div className="caption">
                  <p className="circle">✓</p>
                  <h4>Create simple rules</h4>
                    <p>
                    Let Calendly know your availability preferences and it will do the work for you.
                    </p>
                  </div>
                </div>
              </div>
                <div className="col-md-4">
                    <div className="thumbnails">
                <div className="caption">
                  <p className="circle">✓</p>
                  <h4>Share your link</h4>
                    <p>
                    Send guests your Calendly link or embed it on your website, It's a great idea.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                    <div className="thumbnails">
                <div className="caption">
                  <p className="circle">✓</p>
                  <h4>Get booked</h4>
                    <p>They pick a time and the event is added to your calendar, Such a great idea.</p>
                  </div>
                </div>
              </div>	
              </div>
              </div>
            </section>
            <section id="sec5">
              <div className="container name">
              <div className="row">
                <div className="col-md-3">
                    <div className="thumbnail amen">
                <div className="caption">
                  <h3 style={{textAlign: "left"}}>Easy<br/><span style={{color: "rgb(0, 107, 255)"}}>ahead</span></h3><br/>
                  <p>We take the work out of connecting with others so you can accomplish more.</p>
                  <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="select" placeholder="English" aria-label="Select" style={{margin: "0px"}} id="signinp"/>
              </form> 
              </div>
              </div>
              </div>

                <div className="col-md-3">
                  <div className="thumbnail amen">
                    <div className="caption">
                      <h3 style={{textAlign: "left"}}>About</h3><br/>
                      <p>About Calendly<br/><br/>
                      Contact Sales<br/><br/>
                      Newsroom<br/><br/>
                      Careers<br/><br/>
                      Security</p>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="thumbnail amen">
                    <div className="caption">
                      <h3 style={{textAlign: "left"}}>Solutions</h3><br/>
                      <p>Customer Success<br/><br/>
                        Sales<br/><br/>
                        Recruiting<br/><br/>
                        Education<br/><br/>
                        Marketing</p>
                  </div>
                </div>
              </div>

                <div className="col-md-3">
                  <div className="thumbnail amen">
                    <div className="caption">
                      <h3 className="pf">Popular Features</h3><br/>
                      <p>Embed Calendly<br/><br/>
                        Availability<br/><br/>
                        Sending Notifications<br/><br/>
                      Using Calendly Mobile</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </section>
            <section id="sec6">
		<div className="container-fluid footer">
    		<div className="row">
    			<div className="col-md-12">
    			<p className="text-center">&copy; 2022 Calendly All Rights Reserved</p>
    		</div>
    	</div>
    	</div>
	</section>
            </>     
  )
}

export default Thumb;