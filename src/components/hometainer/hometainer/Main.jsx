import React from 'react'

function Main() {
  return (
    <div>
       <section id="sec1">
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<h1 className="es">Easy scheduling <span>ahead</span></h1>
                    <p>Calendly is your hub for scheduling meetings professionally and efficiently, 
                    eliminating the hassle of back-and-forth emails so you can get back to work.</p>
                    <div className="row help">
			        <div className="col-md-6">
			          <input type="email" name="email" placeholder="enter your email" className="signinn" required/>
			        </div>
			        <div className="col-md-6">
			            <button className="signupp">sign up</button>
			          </div>
			        </div>
				</div>

				<div className="col-md-6">
					<img src="images/home.svg" className="img-responsive img-fluid" alt="calendly"/>
				</div>
			</div>
		</div>
	</section>

	<section id="sec2">
		<div className="container-fluid simplified">
			<div className="row">
				<div className="col-md-12">
					<p className="sim">Simplified scheduling for more than<br/>
						<span> 10,000,000</span> users worldwide</p>
				</div>
			</div>
			<div className="row ic">
		      <div className="col-md-1"></div>
		      <div className="col-md-2">
		        <img src="images/Compass.svg" className="img-responsive imgg" width="120" height="60" alt="calendly"/>
		      </div>
		      <div className="col-md-2">
		        <img src="images/drop.svg" className="img-responsive imggd" width="60" height="30" alt="calendly"/>
		      </div>
		      <div className="col-md-2">
		        <img src="images/ebay.svg" className="img-responsive imgge" width="70" height="35" alt="calendly"/>
		      </div>
		      <div className="col-md-2">
		        <img src="images/Lazboy.svg" className="img-responsive imgg" width="120" height="60" alt="calendly"/>
		      </div>
		      <div className="col-md-2 twi">
		        <img src="images/twilio.svg" className="img-responsive imgg" width="100" height="50" alt="calendly"/>
		      </div>
           </div>
        </div>
	</section>
    
  </div>
  )
}

export default Main;