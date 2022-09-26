import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Nav, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

function Thumb() {
  return (
    <div>
        <section id="sec5">
		<div class="container name">
		<div class="row">
			<div class="col-md-3">
    			<div class="thumbnail amen">
     
      <div class="caption">
        <h3 style={{textAlign: "left"}}>Easy<br/><span>ahead</span></h3><br/>
        <p>We take the work out of connecting with others so you can accomplish more.</p>
        <form class="form-inline my-2 my-lg-0">
		  <input class="form-control mr-sm-2" type="select" placeholder="English" aria-label="Select" style={{marginTop: "10px"}} id="signinp"/>
		</form> 

      </div>
    </div>
    </div>
			<div class="col-md-3">
				<div class="thumbnail amen">
					<div class="caption">
						<h3 style={{textAlign: "left"}}>About</h3><br/>
						<p>About Calendly<br/><br/>
						Contact Sales<br/><br/>
						Newsroom<br/><br/>
						Careers<br/><br/>
						Security</p>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="thumbnail amen">
					<div class="caption">
						<h3 style={{textAlign: "left"}}>Solutions</h3><br/>
						<p>Customer Success<br/><br/>
							Sales<br/><br/>
							Recruiting<br/><br/>
							Education<br/><br/>
							Marketing</p>
				</div>
			</div>
		</div>
			<div class="col-md-3">
				<div class="thumbnail amen">
					<div class="caption">
						<h3 class="pf">Popular Features</h3><br/>
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
		<div class="container-fluid footer">
    		<div class="row">
    			<div class="col-md-12">
    			<p class="text-center">
    				&copy; 2022 Calendly All Rights Reserved
    			</p>
    		</div>
    	</div>
    	</div>
	</section>
  </div>
  
  )
}

export default Thumb;