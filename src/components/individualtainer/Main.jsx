import React from 'react'

function Main() {
  return (
      <div>
        <section id="sec1" className="sec1">
		<div className="container">
		<div className="row twotwo">
				<div className="col-md-6">
				<h1 className="easyone">The genius way to work <span>better</span></h1>
				<p className="text">Calendly makes it easy to work smarter when you re working solo. 
				Meetings, sessions, and appointments become more efficient ways to achieve success 
			  and accomplish goals.</p>
			  <button tabindex="0" data-testid="regular-button" 
			  type="submit"  style={{fontWeight: "bold", opacity: "1" }} className="sc-1gujuaa-0 fQJnIm" 
			  id="signupone">Sign up for free</button>
			 </div>

			<div className="col-md-6">
				<img src="images/sales.webp" alt="calendlyimage" className="img-responsive img-fluid"/>
			</div>
		</div>
	</div>
	</section>

	<section id="sec2" className="sec2">
		<div className="container pad">
		<div className="row">
			<div className="col-md-6 easy">
				<img src="images/lady.JPG" alt="calenderimage" className="img-responsive img-fluid"/>
			</div>
			<div className="col-md-6">
				<h1 className="easy way">The genius way to work <span>better</span></h1>
				<p className="text">Calendly makes it easy to work smarter when you re working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals.</p><a className="learn" href="https://calendly.com/integration#calendars">Learn More </a>
			</div>
		</div>	
	</div>
	</section>

	<section id="sec3">
		<div className="container contain">
		<div className="row twothree">
				<div className="col-md-6">
				<h1 className="easyone eo">Work like you have a personal assistant</h1>
				<p className="text">Because Calendly automates administrative tasks like sending reminder emails and follow-ups, you can focus on the work that builds your business and brings customers back for more.</p>
				<a className="learn3" href="https://calendly.com/integration#calendars">Learn More </a>
		    </div>
			  <div className="col-md-6">
				    <img src="images/lady2.JPG" alt="calendlyimage" className="img-responsive img-fluid"/>
			  </div>
		</div>
	</div>
	</section>

	<section id="sec4">
		<div className="container-fluid give">
		<div className="row">
			<div className="col-md-12">
				<h2 className="seen">Find just-right plans for<br/> individuals and small teams</h2>
				<p><button tabindex="0" data-testid="regular-button" type="submit"  style={{fontWeight: "bold", opacity: "1" }}className="sc-1gujuaa-0 fQJnIm">
				See our plans</button></p>
			</div>
		</div>
	</div>
	</section>
      </div>
  )
}

export default Main;