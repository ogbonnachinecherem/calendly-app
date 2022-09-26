import React from 'react'

function Main() {
  return (
    <div>
       <section id="sec1">
		<div className="container to">
		<div className="row">
				<div className="col-md-6">
				<h1 className="easy tm"><span>Power up</span><p className="yteams">your teams</p></h1>
				<p className="text">Calendly gives you control over team scheduling with a standardized, scalable process. It’s secure, easy to manage, and integrates with your team's favorite tools, so you can get everyone working as efficiently and effectively as possible.</p>
			<button tabIndex="0" data-testid="regular-button" type="submit"  style={{fontWeight: "bold", opacity: "1" }} className="sc-1gujuaa-0 fQJnIm" id="tmbtn1">Start for free</button>
				<button tabIndex="0" data-testid="regular-button" type="submit"  style={{fontWeight: "bold", opacity: "1" }} className="sc-1gujuaa-0 fQJnIm" id="tmbtn">Contact sales</button>
			</div>

			<div className="col-md-6">
				<img src="images/teams.JPG" alt="calendlyimage" className="img-responsive img-fluid"/>
			</div>
		</div>
	</div>
	</section>

	<section id="sec2">
		<div className="container">
			<div className="row move">
			<div className="col-md-12">
				<h1 className="g">Streamline tasks, extend team<br/> reach</h1>			</div>
		</div>
		<div className="row">
			<div className="col-md-6">
				<img src="images/meme.JPG" alt="calendlyimage" className="img-responsive img-fluid"/>
			</div>
				<div className="col-md-6">
					<h2 className="song">AUTOMATED ASSIGNMENT</h2>
				
				<h1 className="low">Control how your team gets <br/>booked</h1>
				<p className="text">With Calendly, you can offer sessions that are a few minutes or a few hours, for one invitee or a group. Automated round-robin, first-available, or geography-based assignments let you easily divvy up meetings in any way that works for your team members.</p>
			</div>
		</div>
	</div>
	</section>

	<section id="sec3">
			<div className="container mom">
		<div className="row move">
			<div className="col-md-12">
				<h3 className="pop">Solutions</h3>
				<h1 className="h">The right Calendly for the work you do</h1>
			</div>
		</div>

		<div className="row not">
			<div className="col-md-3">
    			<div className="thumbnaild">
      <img src="images/customer.webp" height="200" width="250" alt="customer"/>
      <div className="caption">
      	
        <h4 className="recruit">Get booked</h4>
          <p className="send">They pick a time and the event is added to your calendar.</p>
          <p className="led"><a className="learn" href="https://calendly.com/integration#calendars">Learn More </a></p>
        </div>
      </div>
    </div>
      <div className="col-md-3">
    			<div className="thumbnaild">
      <img src="images/Recruit.webp" height="200" width="250" alt="recruit"/>
      <div className="caption">
      	
        <h4 className="recruit">Recruiting</h4>
          <p className="send">
        	Send guests your Calendly link or embed it on your website.
          </p>
          <p className="le"><a className="learn" href="https://calendly.com/integration#calendars">Learn More </a></p>
        </div>
      </div>
    </div>
    
    <div className="col-md-3">
    			<div className="thumbnaild">
      <img src="images/sales.webp" height="200" width="250" alt="sales"/>
      <div className="caption">
        <h4 className="sales">Sales</h4>
          <p className="cat">
        	Get to your best leads faster.
          </p>
          <p className="lo"><a className="learn" href="https://calendly.com/integration#calendars">Learn More </a></p>
        </div>
      </div>
    </div>
    <div className="col-md-3">
    			<div className="thumbnaild">
      <img src="images/Education.webp" height="200" width="250" alt="education"/>
      <div className="caption">
      	
        <h4 className="edu">Education</h4>
          <p className="boost">Boost student success</p>
          <p className="leo"><a className="learn" href="https://calendly.com/integration#calendars">Learn More </a></p>
        </div>
      </div>
    </div>
</div>
</div>
	</section>
    </div>
  )
}

export default Main;